export interface Question {
  chapter: string;
  question: string;
  options: string[];
  answer: string[];
  multipleAnswer: boolean;
}

export const questions: Question[] = [
  {
    chapter: 'Chapter 6',
    question: '1. A patient is noted to have red, painless spots on the palms and soles, red, painful nodes in the pad of the fingers and toes, and splinter hemorrhages under the nails, as well as an elevated body temperature and elevated white blood cell (WBC) count. The emergency nurse suspects the patient has:',
    options: ['Endocarditis', 'Pericarditis', 'Myocarditis', 'Leukemia'],
    answer: ['Endocarditis'],
    multipleAnswer: false
  },
  {
    chapter: 'Chapter 6',
    question: '2. A conscious pulseless patient with a continuous-flow left ventricular assist device and a history of end-stage heart failure presents to the emergency department because of a "low-flow" alarm. Which of the following interventions would be appropriate in this scenario?',
    options: ['Obtain an automatic blood pressure', 'Exchange the controller', 'Administer intravenous fluids', 'Begin chest compressions'],
    answer: ['Administer intravenous fluids'],
    multipleAnswer: false
  },
  {
    chapter: 'Chapter 6',
    question: '3. A nurse is preparing to assist with drug-assisted intubation (DAI) for a patient in severe respiratory distress with a pulse oximetry reading of 91%. Which of the following is the priority intervention for preoxygenating the patient?',
    options: ['Place the patient in reverse Trendelenburg', 'Administer an opioid', 'Use positive pressure ventilation', 'Provide high-flow oxygen'],
    answer: ['Provide high-flow oxygen'],
    multipleAnswer: false
  },
  {
    chapter: 'Chapter 6',
    question: '4. A patient presents complaining of lower abdominal pain and the inability to void in the past 24 hours. Which of the following is the priority intervention for this patient?',
    options: ['Obtaining a full set of vital signs', 'Preparing the patient for an abdominal radiograph', 'Inserting a urinary catheter', 'Administering an intravenous fluid bolus of 500 mL'],
    answer: ['Inserting a urinary catheter'],
    multipleAnswer: false
  },
  {
    chapter: 'Chapter 6',
    question: '5. An emergency department patient has been diagnosed with a subarachnoid hemorrhage (SAF). Which medication is the priority for this patient?',
    options: ['Antiemetic', 'Antiepileptic', 'Antihypertensive', 'Calcium channel blocker'],
    answer: ['Antihypertensive'],
    multipleAnswer: false
  },
  {
    chapter: 'Chapter 6',
    question: '6. A patient has experienced an acute psychotic episode and states, “I’m coming back here when I get released from the hospital, and I am going to kill Jane Smith." Which of the following interventions would be most appropriate for a nurse to perform?',
    options: ['Ignore the threat because this is normal behavior in patients who are psychotic', 'Alert the proper law enforcement authorities', 'Tell the patient that it is inappropriate to make this statement', 'Request that the hospital chaplain come and talk to the patient'],
    answer: ['Alert the proper law enforcement authorities'],
    multipleAnswer: false
  },
  {
    chapter: 'Chapter 6',
    question: '7. Heparin may be administered to prevent the formation of clots in disseminated intravascular coagulation (DIC) associated with which of the following conditions?',
    options: ['Retained placenta', 'Gastrointestinal bleeding', 'Recent hip surgery', 'Ruptured cerebral aneurysm'],
    answer: ['Retained placenta'],
    multipleAnswer: false
  },
  {
    chapter: 'Chapter 6',
    question: '8. The nurse is preparing to discharge a female geriatric patient who presented for severe "heartburn." Medication reconciliation reveals that the patient is on alendronate (Fosamax). What information should the nurse provide to the patient with the discharge instructions?',
    options: ['Always take alendronate with food', 'Sit or stand upright for 30 minutes after taking alendronate', 'Have calcium blood levels monitored monthly', 'Take alendronate at bedtime'],
    answer: ['Sit or stand upright for 30 minutes after taking alendronate'],
    multipleAnswer: false
  },
  {
    chapter: 'Chapter 6',
    question: '9. A patient presents to triage with complaints of a severe throbbing-type headache pain above the left eye and the left side of the face. The patient has a history of polymyalgia rheumatica. The nurse suspects that the patient\'s current discomfort is related to the presence of which of the following?',
    options: ['Temporomandibular joint (TM) dislocation', 'Temporal arteritis', 'Cluster headache', 'Sinusitis'],
    answer: ['Temporal arteritis'],
    multipleAnswer: false
  },
  {
    chapter: 'Chapter 6',
    question: '10. An unresponsive patient arrives at the ED with upper-and midfacial injuries after involvement in a high-speed motor vehicle collision. Which of the following interventions should be used initially to maintain an open airway for this patient?',
    options: ['Intubate with an uncuffed endotracheal tube', 'Insert an oropharyngeal airway', 'Place the patient in a left lateral position', 'Use the head tilt-chin lift maneuver'],
    answer: ['Insert an oropharyngeal airway'],
    multipleAnswer: false
  },
  {
    chapter: 'Chapter 6',
    question: '11. A patient is being treated in the emergency department for suicidal ideation. The patient lives alone, recently lost their job, and will soon lose their apartment. The patient has been talking to friends about not being around and admits to having a plan. Which of the following is the most appropriate disposition for this patient?',
    options: ['Inpatient admission to a psychiatric unit', 'Discharge to home and follow up with primary care', 'Inpatient admission to an intensive care unit', 'Discharge to a friend\'s home with outpatient counseling'],
    answer: ['Inpatient admission to a psychiatric unit'],
    multipleAnswer: false
  },
  {
    chapter: 'Chapter 6',
    question: '12. A patient involved in a motor vehicle collision is diagnosed with an unstable pelvic ring fracture. Which classification of hypovolemic shock would most likely occur as a result of this injury?',
    options: ['Class IV', 'Class III', 'Class II', 'Class I'],
    answer: ['Class IV'],
    multipleAnswer: false
  },
  {
    chapter: 'Chapter 6',
    question: '13. A nurse is caring for a patient in asystole during cardiopulmonary resuscitation, and intravenous access cannot be obtained. The physician orders intravenous epinephrine. What is the most appropriate nursing action at this time?',
    options: ['Recommend administering the epinephrine via the intraosseous route', 'Wait until intravenous access is obtained before preparing the dose', 'Prepare to deliver an unsynchronized defibrillation at 120 joules', 'Recommend administering the epinephrine via the intramuscular route'],
    answer: ['Recommend administering the epinephrine via the intraosseous route'],
    multipleAnswer: false
  },
  {
    chapter: 'Chapter 6',
    question: '14. A trauma patient has penetrating injuries to the anterior chest and abdomen. Further assessment reveals muffled heart sounds and distended neck veins. What is the most appropriate intervention at this time?',
    options: ['Prepare for a needle aspiration to be inserted 1 cm left of the xiphocostal angle', 'Decrease the intravenous flow rate to avoid hypervolemia', 'Prepare for a needle decompression at the second intercostal space midclavicular line', 'Prepare for chest tube insertion at the fifth intercostal space'],
    answer: ['Prepare for a needle aspiration to be inserted 1 cm left of the xiphocostal angle'],
    multipleAnswer: false
  },
  {
    chapter: 'Chapter 6',
    question: '15. What is the best position to place a patient in order to auscultate for the presence of a pericardial friction rub?',
    options: ['Ask the patient to stand up and then squat, and then place the stethoscope at the left sternal border and listen at midsystole', 'Ask the patient to lie or sit quietly, and then place the stethoscope at the right sternal border and listen for radiation to the neck', 'Ask the patient to lean forward, and then place the stethoscope at the left sternal border and listen at end-expiration', 'Ask the patient to lie or sit quietly, and then place the stethoscope at the apex of the heart and listen for radiation to the axilla'],
    answer: ['Ask the patient to lean forward, and then place the stethoscope at the left sternal border and listen at end-expiration'],
    multipleAnswer: false
  },
  {
    chapter: 'Chapter 6',
    question: '16. Which of the following statements made by a patient recently diagnosed with peripheral vascular disease indicates that they have an accurate understanding of the disease?',
    options: ['"When my leg starts to cramp, I should stop walking and rest."', '"When pain develops in my leg, I should apply an ice pack."', '"The pain in my legs may be a sign of worsening arterial disease."', '"I should walk as little as possible to avoid cramping my legs."'],
    answer: ['"When my leg starts to cramp, I should stop walking and rest."'],
    multipleAnswer: false
  },
  {
    chapter: 'Chapter 6',
    question: '17. What is the priority nursing intervention for a patient with a history of a myocardial infarction (MI) who develops symptomatic ventricular tachycardia?',
    options: ['Obtain an electrocardiogram (ECG)', 'Defibrillate the patient', 'Administer epinephrine', 'Prepare for synchronized cardioversion'],
    answer: ['Prepare for synchronized cardioversion'],
    multipleAnswer: false
  }
];
