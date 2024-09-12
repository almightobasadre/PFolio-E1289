export const formatDate = (date: Date, format: string = 'YYYY-MM-DD'): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    };
  
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  
    // Simple formatting example, you can expand this based on your needs
    if (format === 'YYYY-MM-DD') {
      return formattedDate.replace(/\//g, '-');
    }
  
    return formattedDate;
  };
  