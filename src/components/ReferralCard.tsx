import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { ReferralType } from '../types/referral';

interface ReferralCardProps {
  referral: ReferralType;
  onUpdate: (referralId: string, updates: Partial<ReferralType>) => Promise<void>;
  isSubmitting: boolean;
  isOwner: boolean;
}

export default function ReferralCard({ referral, onUpdate, isSubmitting, isOwner }: ReferralCardProps) {
  const { t } = useTranslation('common');
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(referral);
  const [updating, setUpdating] = useState(false);

  const handleUpdate = async () => {
    setUpdating(true);
    try {
      await onUpdate(referral.id, editedData);
      setIsEditing(false);
    } finally {
      setUpdating(false);
    }
  };

  if (isEditing) {
    return (
      <div className="border rounded-lg p-4 bg-white shadow">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={editedData.name}
              onChange={(e) => setEditedData({ ...editedData, name: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={editedData.email}
              onChange={(e) => setEditedData({ ...editedData, email: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select
              value={editedData.status}
              onChange={(e) => setEditedData({ ...editedData, status: e.target.value as ReferralType['status'] })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="pending">{t('referral.status.pending')}</option>
              <option value="approved">{t('referral.status.approved')}</option>
              <option value="rejected">{t('referral.status.rejected')}</option>
            </select>
          </div>

          <div className="flex justify-end space-x-2">
            <button
              onClick={() => setIsEditing(false)}
              className="px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleUpdate}
              disabled={updating || isSubmitting}
              className="px-3 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded disabled:opacity-50"
            >
              {updating || isSubmitting ? 'Saving...' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="border rounded-lg p-4 bg-white shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium">{referral.name}</h3>
          <p className="text-sm text-gray-500">{referral.email}</p>
          <div className="mt-2">
            <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${
              referral.status === 'approved' ? 'bg-green-100 text-green-800' :
              referral.status === 'rejected' ? 'bg-red-100 text-red-800' :
              'bg-yellow-100 text-yellow-800'
            }`}>
              {t(`referral.status.${referral.status}`)}
            </span>
            {!isOwner && (
              <span className="ml-2 text-xs text-gray-500">
                Assigned
              </span>
            )}
          </div>
        </div>
        
        <button
          onClick={() => setIsEditing(true)}
          className="px-3 py-1 text-sm text-blue-600 hover:text-blue-800"
        >
          Edit
        </button>
      </div>

      {/* Additional details based on referral type */}
      <div className="mt-4 text-sm text-gray-600">
        {referral.type === 'au_pair' && (
          <>
            <p>Age: {referral.age}</p>
            <p>Nationality: {referral.nationality}</p>
            <p>Experience: {referral.experience}</p>
          </>
        )}
        {referral.type === 'host_family' && (
          <>
            <p>Location: {referral.location}</p>
            <p>Children: {referral.childrenCount}</p>
            <p>Ages: {referral.childrenAges}</p>
          </>
        )}
        {referral.type === 'english_student' && (
          <>
            <p>Age: {referral.age}</p>
            <p>Current Level: {referral.currentLevel}</p>
            <p>Format: {referral.preferredFormat}</p>
          </>
        )}
      </div>
    </div>
  );
}
