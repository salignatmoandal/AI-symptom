/**
 * This file simulates AI-based risk assessment. In a real app,
 * you'd call OpenAI, Hugging Face, or an internal ML service.
 */

export const aiAnalyzeSymptoms = async (symptoms: string) => {
    // A naive example: if 'fever' is in symptoms, guess flu or infection
    const lowered = symptoms.toLowerCase();
    let conditions: string[] = [];
  
    if (lowered.includes('fever') || lowered.includes('headache')) {
      conditions.push('Flu', 'Viral Infection');
    }
    if (lowered.includes('fatigue')) {
      conditions.push('Stress', 'Common Cold');
    }
  
    // Fallback
    if (conditions.length === 0) {
      conditions.push('No matching conditions found. Please consult a doctor.');
    }
  
    // Emulate async
    return new Promise<string[]>((resolve) => {
      setTimeout(() => resolve(conditions), 500);
    });
  };