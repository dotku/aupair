const parseMarkdown = (text: string): string => {
  // Replace code blocks
  text = text.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
  
  // Replace inline code
  text = text.replace(/`([^`]+)`/g, '<code>$1</code>');
  
  // Replace bold text
  text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  
  // Replace italic text
  text = text.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  
  // Replace links
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">$1</a>');
  
  // Replace line breaks
  text = text.replace(/\n/g, '<br />');
  
  return text;
};

export default parseMarkdown;
