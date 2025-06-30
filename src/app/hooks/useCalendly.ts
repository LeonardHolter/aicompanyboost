export const useCalendly = () => {
  const openCalendly = (url?: string) => {
    const calendlyUrl =
      url ||
      'https://calendly.com/leonard-holter-columbia/free-ai-support-consultation';

    console.log('Opening Calendly in new tab:', calendlyUrl);
    window.open(calendlyUrl, '_blank');
  };

  return { openCalendly };
};
