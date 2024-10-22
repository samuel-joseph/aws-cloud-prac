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
    answer: ['Discharge to home and follow up with primary care'],
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
    question: '17. Which of the following patients would be most at risk for developing a deep vein thrombosis (DVT) and pulmonary embolus (PE)?',
    options: ['A 57-year-old male with controlled hypertension', 'A 48-year-old diabetic', 'A 35-year-old female who smokes and is taking birth control pills', 'A 29-year-old male with a recent leg injury'],
    answer: ['A 35-year-old female who smokes and is taking birth control pills'],
    multipleAnswer: false
  },
  {
    chapter: 'Chapter 6',
    question: '18. A patient with a stab wound to the left parasternal anterior chest is intubated and becomes pulseless shortly after arrival. Cardiopulmonary resuscitation is initiated. What is the priority intervention for this patient?',
    options: ['Point-of-care cardiac ultrasound', 'Chest radiograph', 'Open thoracotomy', 'Needle pericardiocentesis'],
    answer: ['Open thoracotomy'],
    multipleAnswer: false
  },
  {
    chapter: 'Chapter 6',
    question: '19. Following the insertion of an intraosseous (IO) device, which of the following findings would indicate that the IO has been properly placed?',
    options: ['The needle has slight movement after insertion.','Bright red blood is noted in the cannula after insertion.','The fluid infusion is halted when the tissue around the IO device is compressed','A reddish frothy aspirate is noted after insertion.'],
    answer: ['A reddish frothy aspirate is noted after insertion.'],
    multipleAnswer: false
  },
  {
    chapter: 'Chapter 6',
    question: '20. A nurse is discharging a child with asthma with a peak expiratory flow meter. What instructions should be included in the teaching plan?',
    options: ['Blow forcefully into the mouthpiece','Inhale slowly and consistently', 'Use only in times of symptoms','Perform the test only once per day'],
    answer: ['Blow forcefully into the mouthpiece'],
    multipleAnswer: false
  },
  {
    chapter: 'Chapter 6',
    question: '21. An adult patient with a history of asthma presents to triage, stating that they are experiencing an acute asthma exacerbation. The emergency care provider orders an electrocardiogram (ECG). The patient asks the nurse why this procedure is necessary. What is the most appropriate response from the nurse?',
    options: ["Respiratory complaints may be due to cardiac problems.",
      "It is a part of our order set for patients with respiratory complaints.",
      "ECGs can show us how well you are breathing.",
      "I don't know. I just do what the provider orders."],
    answer: ["Respiratory complaints may be due to cardiac problems."],
    multipleAnswer: false
  },
  {
    chapter: 'Chapter 6',
    question: '22. The nurse would expect arterial blood gas values from a patient in a severe chronic obstructive pulmonary disease exacerbation to illustrate what finding?',
    options: ['Respiratory acidosis',
      'Respiratory alkalosis',
      'Metabolic acidosis',
      'Metabolic alkalosis'],
    answer: ['Respiratory acidosis'],
    multipleAnswer: false
  },
  {
    chapter: 'Chapter 6',
    question: "23. A patient arrives via emergency medical services following a house fire. The patient has a Glasgow Coma Scale score of 15. What is the most appropriate method to assess current patency of the patient's airway?",
    options: ['Ask the patient to state their name',
      'Obtain an oxygen saturation',
      'Count the respiratory rate',
      'Visualize the oropharynx with a pen light'],
    answer: ['Ask the patient to state their name'],
    multipleAnswer: false
  },
  {
    chapter: 'Chapter 6',
    question: "24. A patient with severe respiratory distress has been intubated with an endotracheal tube (ETT), and mechanical ventilation has been initiated. The ventilator alarm is sounding, indicating high airway pressures. What should the nurse's priority assessment be?",
    options: ['Assess for airway secretions',
      'Check all connections on the ETT and ventilator',
      'Assess the oxygen saturation',
      'Auscultate bilateral breath sounds'],
    answer: ['Assess for airway secretions'],
    multipleAnswer: false
  },
  {
    chapter: 'Chapter 6',
    question: '25. A patient with a history of heart failure presents with complaints of difficulty breathing, presence of a nonproductive cough, and "stabbing" chest pain. On assessment, the nurse auscultates diminished breath sounds bilaterally. What additional information would be the most pertinent to obtain from the patient?',
    options: ['Medication compliance',
    'Recent sick contacts',
    'Vaccination history',
    'Recent travel history'],
    answer: ['Medication compliance'],
    multipleAnswer: false
  },
  {
    chapter: 'Chapter 6',
    question: '26. Which assessment finding would best indicate that chest tube insertion has been successful in relieving a tension pneumothorax?',
    options: ['Improvement in hemodynamics',
    'Immediate rush of air',
    'Bloody drainage in the chest tube',
    'Improved ability to deep breathe'],
    answer: ['Improvement in hemodynamics'],
    multipleAnswer: true
  },
  {
    chapter: 'Chapter 6',
    question: '27. A tube thoracostomy has been placed for a patient with a hemothorax. Immediately after placement, what output amount would alert the nurse to anticipate that the patient would be taken to the operating room for an emergency thoracotomy?',
    options: ['1000 mL',
      '750 mL',
      '500 mL',
      '200 mL'],
    answer: ['1000 mL'],
    multipleAnswer: false
  },
  {
    chapter: 'Chapter 6',
    question: '28. A patient arrives complaining of a sudden onset of chest pain. The patient is anxious and tachypneic. Oxygen saturation is 89%. What is the priority intervention for this patient?',
    options: ['Obtain an echocardiogram',
      'Initiate intravenous access',
      'Obtain arterial blood gas',
      'Administer supplemental oxygen'],
    answer: ['Administer supplemental oxygen'],
    multipleAnswer: false
  },
  {
    chapter: 'Chapter 6',
    question: "29. Intravenous nicardipine (Cardene) has been ordered for blood pressure reduction in a patient with a hypertensive emergency. The patient's blood pressure is 280/124 mm Hg with a mean arterial pressure (MAP) of 176 mm Hg. When titrating the nicardipine for this patient, which order has the safest parameter to follow?",
    options: ["Titrate nicardipine to a MAP of 124 mm Hg over the next hour",
      "Titrate nicardipine to a MAP of 106 mm Hg over the next hour",
      "Titrate nicardipine to a MAP of 158 mm Hg over the next hour",
      "Titrate nicardipine to a MAP of 132 mm Hg over the next hour"],
    answer: ["Titrate nicardipine to a MAP of 132 mm Hg over the next hour"],
    multipleAnswer: false
  },
  //1 to 29 is fixed
  {
    chapter: "Chapter 6",
    question: "30. Which term is used to describe the form of shock that results from a large pulmonary embolism causing unstable patient hemodynamics and decreased tissue perfusion?",
    options: ["Obstructive shock", "Distributive shock", "Hypovolemic shock", "Cardiogenic shock"],
    answer: ["Obstructive shock"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "31. What is the most appropriate initial treatment for acute respiratory distress syndrome (ARDS)?",
    options: [
      "Maintain adequate ventilation and oxygenation",
      "Maintain the patient in the supine position",
      "Limit fluid intake to avoid risk of pulmonary edema",
      "Administer prophylactic antibiotics"
    ],
    answer: ["Maintain adequate ventilation and oxygenation"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "32. A patient presents via private vehicle after a motorcycle crash involving a low-hanging tree limb. The patient complains of anterior neck pain. The nurse also notes a hoarseness in the patient's voice and subcutaneous emphysema at the anterior inferior neck. What is the priority nursing action?",
    options: [
      "Apply a hard cervical collar",
      "Prepare for a neck CT",
      "Prepare for chest tube insertion",
      "Position the patient supine"
    ],
    answer: ["Apply a hard cervical collar"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "33. A patient with a history of chronic obstructive pulmonary disease (COPD) presents with complaints of a runny nose, headache, and nonproductive cough for 3 days. The patient is able to speak without difficulty. Vital signs are BP 158/88 mm Hg, HR 106 beats/minute, RR 22 breaths/minute, SpO2 88% room air, T 37.1°C (98.8°F). The priority intervention for the nurse to implement for this patient is which of the following?",
    options: [
      "Apply low-flow supplemental oxygen",
      "Administer methylprednisolone",
      "Obtain a chest radiograph",
      "Obtain an arterial blood gas analysis"
    ],
    answer: ["Apply low-flow supplemental oxygen"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "34. A patient presents with an uncomplicated episode of migraine. The nurse has an order for diphenhydramine, ketorolac, and metoclopramide. The patient asks the reason for the diphenhydramine. What is the most appropriate response?",
    options: [
      "The diphenhydramine can help prevent side effects from another medication in the regimen.",
      "The diphenhydramine works with the other medications to reduce your symptoms.",
      "The diphenhydramine induces sleep to allow you to rest while your pain subsides.",
      "The diphenhydramine reduces the chance of itching associated with the other medications."
    ],
    answer: ["The diphenhydramine can help prevent side effects from another medication in the regimen."],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "35. A 3-week-old infant presents with a temperature of 38.3°C (101.2°F). The caregivers report fever at home for a few days, with the child acting sleepier than usual. During the assessment, the nurse notes petechia to the anterior trunk and abnormal posturing with the head tilted posteriorly. What is the most appropriate diagnostic test to anticipate at this time?",
    options: ["Lumbar puncture", "Chest x-ray", "Urinalysis", "Complete blood count"],
    answer: ["Lumbar puncture"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "36. A patient presents following a bar fight. The patient reports being punched in the face and having their neck forced backward. A few hours later, the patient began noticing upper extremity weakness with associated sensory loss. The patient also reports an inability to urinate, and the bladder scan reveals 300 mL of urine in their bladder. What is the most likely cause of the patient's symptoms?",
    options: ["Central cord syndrome", "Anterior cord syndrome", "Brown-Séquard syndrome", "Posterior cord syndrome"],
    answer: ["Central cord syndrome"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "37. A patient with a history of heart failure presents with dyspnea and pink frothy sputum. Crackles are noted bilaterally on auscultation. The patient is placed on bilevel positive airway pressure (BIPAP) at an inspiratory pressure of 10 cm H₂O and an end-expiratory pressure of 5 cm H₂O. What hemodynamic change is expected to occur as a result of noninvasive positive pressure ventilation (NIPPV)?",
    options: ["Increased venous return", "Decreased cardiac output", "Decreased preload", "Increased afterload"],
    answer: ["Decreased preload"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "38. Which of the following statements indicates an understanding of discharge teaching post-carbon monoxide poisoning exposure?",
    options: [
      "I can wait until next year to install a carbon monoxide detector.",
      "I will only use an electric space heater indoors.",
      "I can continue to use the space heater even if I am not in the room.",
      "I will return to the ED the next time I get a headache and feel tired."
    ],
    answer: ["I will only use an electric space heater indoors."],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "39. Which of the following is the priority intervention for a patient who presents with sudden onset of lip swelling, facial edema, and throat tightness and whose vital signs are BP 90/60 mm Hg, HR 127 beats/minute, RR 22 breaths/minute, T 38.6°C (97.8°F)?",
    options: ["Epinephrine", "High-flow oxygen", "Corticosteroids", "Aerosolized albuterol"],
    answer: ["Epinephrine"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "40. A patient reports a red, itchy rash with blisters covering their face, neck, back, and arms. The rash appeared after hunting the previous day in a heavily wooded area. Which of the following medications does the nurse anticipate administering to this patient?",
    options: ["Oral corticosteroid", "Oral antibiotic", "Topical antifungal agent", "Intravenous narcotic analgesic"],
    answer: ["Oral corticosteroid"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "41. A patient is brought in after exhibiting aggressive behavior toward family members. To assess the patient's current mental state, which question would be most important for the nurse to ask the patient?",
    options: [
      "What are the voices telling you to do?",
      "What medications are you currently taking?",
      "What past medical history do you have?",
      "What brought this behavior on today?"
    ],
    answer: ["What are the voices telling you to do?"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "42. A patient with bipolar disorder has been receiving antipsychotic medications for the treatment of acute mania. Which diagnostic test should the nurse anticipate for this patient?",
    options: [
      "12-lead electrocardiogram (ECG)",
      "Liver function testing",
      "Bladder scan",
      "Complete blood count"
    ],
    answer: ["12-lead electrocardiogram (ECG)"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "43. A patient arrives by emergency medical services after being found wandering the street and talking loudly to themself. The patient will not answer to their name. Speech is clear, and the patient displays no signs of aggressive behavior, but will not make eye contact with the nurse or follow simple commands. Which of the following signs and symptoms would alert the emergency nurse to an organic cause for their psychosis?",
    options: [
      "Signs of trauma",
      "Tachycardia",
      "Auditory hallucinations",
      "Loud speech volume"
    ],
    answer: ["Signs of trauma"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "44. Ziprasidone (Geodon) is most appropriate for which of the following psychiatric scenarios?",
    options: [
      "The adult patient exhibiting acute depressive disorder and is tearful and sobbing.",
      "Exhibiting acute manic behavior, in handcuffs, and accompanied by police.",
      "Having auditory hallucinations and is hearing that he should not move.",
      "Experiencing extrapyramidal effects related to their psychiatric medications."
    ],
    answer: ["Exhibiting acute manic behavior, in handcuffs, and accompanied by police."],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "45. A patient presents voicing thoughts of suicidal ideation. Why is it important to identify and address medical issues before treating a mental health issue?",
    options: [
      "Medical problems can mimic mental health problems.",
      "Mental health problems are not associated with serious medical illness.",
      "Medical problems can be resolved more quickly than behavioral problems.",
      "Once in the ED, the patient is safe from suicide."
    ],
    answer: ["Medical problems can mimic mental health problems."],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "46. Which statement is correct regarding hemophilia disorders?",
    options: [
      "There is an increased incidence of hemophilia in females.",
      "Platelet administration is a common treatment in hemophilia.",
      "Hemophilia is an inherited sex-linked genetic disorder.",
      "Two common triggers of hemophilia are hypoxia and dehydration."
    ],
    answer: ["Hemophilia is an inherited sex-linked genetic disorder."],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "47. An elderly patient being evaluated following a fall is diagnosed with an intracranial bleed. The patient has been taking 300 mg of clopidogrel (Plavix) daily. What is the most appropriate action for the nurse to take?",
    options: [
      "Administer vitamin K via intravenous route immediately",
      "Administer protamine sulfate via intravenous route immediately",
      "Discontinue the clopidogrel immediately",
      "Decrease in the next dose of clopidogrel"
    ],
    answer: ["Discontinue the clopidogrel immediately"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "48. A patient currently undergoing chemotherapy treatment for leukemia is being discharged following a facial laceration repair. Which statement best indicates to the nurse the patient's understanding of the discharge instructions?",
    options: [
      "I should return to the ED immediately for a temperature of 37.3°C (99.1°F).",
      "I might not see the common signs of infection.",
      "Because I have a high white blood cell count, I am protected from getting an infection.",
      "Pus will be expected during the healing because of my high white blood cell count."
    ],
    answer: ["I might not see the common signs of infection."],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "49. A 28-week-pregnant patient presents with right upper quadrant pain that is radiating to the right scapular area, beginning shortly after eating pizza. Based on the patient's presentation, the most likely diagnosis is:",
    options: [
      "Diverticulitis.",
      "Cholecystitis.",
      "Pancreatitis.",
      "Gastroenteritis."
    ],
    answer: ["Cholecystitis."],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "50. A chronic alcoholic patient presents with a complaint of no alcohol for 2 days with nausea, vomiting, weakness, and restlessness. During the assessment, the emergency nurse notes hyperactive bowel sounds, orthostatic changes in their BP, and hematemesis. What is the priority intervention for the emergency nurse to take?",
    options: [
      "Insert a large-diameter gastric tube.",
      "Obtain a complete set of vital signs.",
      "Administer high-flow oxygen via nonrebreather mask.",
      "Establish IV access with two large-caliber catheters."
    ],
    answer: ["Establish IV access with two large-caliber catheters."],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "51. A child presents after choking on a plastic object. Their airway is clear, but the child has persistent drooling and difficulty swallowing. The nurse would anticipate what diagnostic procedure to be used to locate the foreign body?",
    options: [
      "Chest radiograph",
      "Bedside ultrasound",
      "End-tidal CO₂ measurement",
      "Direct laryngoscopy"
    ],
    answer: ["Chest radiograph"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "52. A term newborn has been delivered in the emergency department. They have been warmed, temperature is being maintained, the airway is positioned, secretions have been cleared, and the baby has been dried and stimulated. To evaluate the effectiveness of these interventions, the nurse anticipates the infant's targeted pre-ductal oxygen saturation (SpO₂) after 1 minute to be approximately:",
    options: [
      "63%",
      "73%",
      "80%",
      "90%"
    ],
    answer: ["63%"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "53. A patient presents with complaints of malaise, fever, anorexia, and nausea for the past 2 weeks. The triage nurse becomes concerned that the patient may have developed hepatitis A when they report:",
    options: [
      "Having unprotected sexual contact with an individual with HIV.",
      "Having a history of intravenous (IV) drug use.",
      "Having sustained a tick bite while camping recently.",
      "Having recently traveled to Africa on a medical mission."
    ],
    answer: ["Having recently traveled to Africa on a medical mission."],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "54. What is the most common cause of mechanical bowel obstruction?",
    options: [
      "Paralytic ileus",
      "Bacterial intestinal infection",
      "Adhesions from previous surgeries",
      "Decreased blood supply to the intestines"
    ],
    answer: ["Adhesions from previous surgeries"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "55. A patient presents with complaints of pain and swelling over the past 4 days. Which diagnostic tool best identifies the source of the patient's complaint?",
    options: [
      "Abdominal radiograph",
      "Computed tomography (CT) scan of the abdomen",
      "Magnetic resonance imaging of the abdomen",
      "Abdominal ultrasound"
    ],
    answer: ["Abdominal ultrasound"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "56. A 7-month-old is carried by a parent who notes that the infant has been irritable, crying loudly, and draig up their legs at frequent intervals. You note that the child's abdomen is distended and red mucus like stori in the diaper. The child's symptoms are most consistent with which of the following conditions?",
    options: [
      "Intussusception",
      "Pyloric stenosis",
      "Appendicitis",
      "Incarcerated hernia"
    ],
    answer: ["Intussusception"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "57. A patient presents with sudden-onset severe epigastric pain following an alcohol binge. Pain is refered s his back and alleviated when he lies supine or leans forward. Physical examination reveals upper abdomin tenderness, tachycardia, and absent bowel sounds. What is the most likely disease process?",
    options: [
      "Bowel obstruction",
      "Cholecystitis",
      "Pyelonephritis",
      "Pancreatitis"
    ],
    answer: ["Pancreatitis"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "58. A motor vehicle collision victim presents with a seat belt injury to the abdomen. Vital signs are BP 100/72 Hg, HR 106 beats/minute, RR 18 breaths/minute, T 36.2°C (97.2°F). Which procedure would be anticipa to be performed as part of the patient's initial assessment?",
    options: [
      "Computed tomography (CT) scan",
      "Hemoglobin and hematocrit (H&H)",
      "Focused assessment with sonography for trauma (FAST)",
      "Diagnostic peritoneal lavage (DPL)"
    ],
    answer: ["Focused assessment with sonography for trauma (FAST)"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "59. Raynaud's disease is characterized by which assessment findings?",
    options: [
      "Severe leg cramps and redness",
      "Carpopedal spasms and intense heat",
      "Intense vasospasms and pallor of the digits",
      "Numbness and tingling of the wrist and elbow"
    ],
    answer: ["Intense vasospasms and pallor of the digits"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "60. Which of the following is the only proven medical therapy shown to reduce the progression and mortality of COPD?",
    options: [
      "Smoking cessation",
      "Short-acting inhaled bronchodilators",
      "Inhaled corticosteroids",
      "Pulmonary rehabilitation"
    ],
    answer: ["Smoking cessation"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "61. A patient presents as pale and diaphoretic with the following vital signs: BP 130/85 mm Hg, HR 135 beats/ minute, RR 40 breaths/minute, SpO, 48% room air, T 37.2°C (99.0°F). Lung sounds are diminished bilaterally throughout, with crackles at the bases. The patient is visiting from Florida and has been in town for four days; the current elevation is 9500 feet. What condition should the nurse be most concerned about?",
    options: [
      "Pulmonary embolism",
      "Pneumonia",
      "Pneumothorax",
      "High-altitude pulmonary edema"
    ],
    answer: ["High-altitude pulmonary edema"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "62. Which common healthcare issue affects the quality of life in patients with multiple sclerosis?",
    options: [
      "Hypertension",
      "Diabetes",
      "Depression",
      "Elevated cholesterol"
    ],
    answer: ["Depression"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "63. A patient has a 2-week history of repeatedly falling, accompanied by ascending weakness and tingling in the feet and fingers. There is loss of the knee-jerk reflex, and the patient is complaining of being unable to take a deep breath and of overall difficulty in breathing. Vital signs are BP 120/70 mm Hg, HR 72 beats/minute, RR 22 breaths/minute, SpO, 96% on room air. The emergency nurse suspects the patient may have which of the",
    options: [
      "Myasthenia gravis",
      "Guillain-Barré syndrome (GBS)",
      "Bell's palsy",
      "Botulism"
    ],
    answer: ["Guillain-Barré syndrome (GBS)"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "64. A patient diagnosed with bacterial meningitis was given intravenous antibiotics and an antipyretic for fever. The nurse identifies that additional patient education is required for their diagnosis of bacterial meningitis when the patient states:",
    options: [
      "My girlfriend will need to be evaluated for this disease.",
      "I will have to cancel my dinner plans with friends for this evening.",
      "I need to take medication to reduce my fever.",
      "I will take my antibiotics until my symptoms go away."
    ],
    answer: ["I will take my antibiotics until my symptoms go away."],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "A patient presents after two tonic-clonic seizure episodes within the previous 3 days despite being compliant with daily doses of levetiracetam (Keppra). Which of the following statements made by the patient indicates that additional education is required this medication?",
    options: [
      "I use the rowing machine at the gym every day.",
      "I use meditation to help with sleep.",
      "I keep hydrated to protect my kidneys.",
      "I limit alcohol to two drinks each night."
    ],
    answer: ["I limit alcohol to two drinks each night."],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "66. A patient presents via emergency medical services as the patient has bilateral wrist movement but now is only able to shrug their shoulders. The priority intervention for this patient would be to:",
    options: [
      "Notify the trauma team.",
      "Document these new findings.",
      "Determine the patient's pain level.",
      "Reassess patient function in 15 minutes."
    ],
    answer: ["Notify the trauma team."],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "67. A patient weighing 100 kg will receive tissue plasminogen activator for an acute ischemic stroke. A dose of 100 mg is ordered, with 10% of the dose to be administered via intravenous push and the remaining dose over an hour infusion. After verifying the weight and dose, it is determined that 90 mg is the recommended dosing for acute ischemic stroke. What is the next action the nurse should perform?",
    options: [
      "Administer 10 mg over 1 minute, followed by the administration of 90 mg over 59 minutes via infusion.",
      "Notify the provider of the discrepancy between the order and the recommended dosing.",
      "Administer 9 mg over 1 minute, followed by the administration of 91 mg over 59 minutes via infusion.",
      "Administer 10 mg over 1 minute, followed by the administration of 90 mg over 60 minutes via the infusion pump."
    ],
    answer: ["Notify the provider of the discrepancy between the order and the recommended dosing."],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "68. The provider is considering the administration of alteplase (Activase/tPA) to an 82-year-old patient diagnosed with an acute ischemic stroke. In addition to the patient's age, which other factor would exclude the patient from the administration of alteplase within the recommended extended 3- to 4.5-hour time window?",
    options: [
      "National Institutes of Health (NIH) Stroke Scale score greater than 20",
      "NIH Stroke Scale score of 3",
      "Previous history of an ST-elevation myocardial infarction",
      "History of diabetes and previous stroke"
    ],
    answer: ["History of diabetes and previous stroke"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "69. Which of the following patient presentations would benefit from the administration of nimodipine (Nimotop) to decrease the risk of vasospasm and possible cerebral infarction?",
    options: [
      "Subarachnoid hemorrhage resulting from traumatic brain injury",
      "Subdural hematoma in an elderly patient",
      "Subarachnoid hemorrhage resulting from a cerebral aneurysm",
      "Subdural hematoma in a patient who abuses alcohol"
    ],
    answer: ["Subarachnoid hemorrhage resulting from a cerebral aneurysm"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "70. Which type of skull fracture would place the patient at the highest risk for developing an intracranial infection?",
    options: [
      "Basilar skull fracture",
      "Linear skull fracture",
      "Depressed skull fracture",
      "Temporal bone fracture"
    ],
    answer: ["Basilar skull fracture"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "71. A patient presents with frequency and urgency of urination associated with right flank pain. On physical assessment, the patient exhibits a temperature of 38.8°C (102°F) and tenderness over the right costovertebral angle. Which of the following conditions is most consistent with this patient's signs and symptoms?",
    options: [
      "Bladder infection",
      "Nephrolithiasis",
      "Pyelonephritis",
      "Urethral stricture"
    ],
    answer: ["Pyelonephritis"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "72. The presence of a suspected testicular torsion is best evaluated using which of the following diagnostic studies?",
    options: [
      "Computed tomography scan",
      "Doppler sonography",
      "Urine culture and sensitivity",
      "Testicular transillumination"
    ],
    answer: ["Doppler sonography"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "73. Following a motor vehicle collision, an unresponsive and intubated patient is received. On assessment, a rigid, bruised abdomen is noted, and a bedside ultrasound examination identifies a ruptured bladder. Based on this information, which of the following interventions is the priority action?",
    options: [
      "Initiate intravenous fluid resuscitation",
      "Insert a urinary drainage catheter",
      "Prepare the patient for a computed tomography scan",
      "Administer intravenous antibiotics"
    ],
    answer: ["Initiate intravenous fluid resuscitation"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "74. A 32-week pregnant patient is involved in a motor vehicle collision. On arrival, the patient is complaining of severe abdominal pain. Blood is noted on the sheets around the patient's lower extremities, and on assessment, the nurse determines the patient is bleeding vaginally. High-flow oxygen is administered via face mask. Which of the following would be the next intervention to perform?",
    options: [
      "Insert two large-caliber intravenous catheters",
      "Perform a type and cross-match",
      "Initiate continuous fetal monitoring",
      "Prepare the patient for a cesarean section"
    ],
    answer: ["Insert two large-caliber intravenous catheters"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "75. A patient diagnosed with a Chlamydia trachomatis vaginal infection should also be screened for which of the following associated sexually transmitted diseases?",
    options: [
      "Human papillomavirus (HPV)",
      "Bacterial vaginosis",
      "Candidiasis",
      "Gonorrhea"
    ],
    answer: ["Gonorrhea"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "76. Which of the following statements made by a victim of sexual assault indicates the need for further education regarding the examination process on the part of the emergency nurse?",
    options: [
      "Once the exam is finished, I'd like to take a shower.",
      "I am so anxious, I don't know how I will get through all of this.",
      "I don't feel comfortable with the police officer in the room during my exam.",
      "I will need to be seen again in about one week to have more cultures taken."
    ],
    answer: ["I don't feel comfortable with the police officer in the room during my exam."],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "77. A patient who is breastfeeding presents complaining of fever and right-sided breast redness and tenderness. In addition to antibiotic therapy, which of the following should be included in the discharge instructions for this patient?",
    options: [
      "Avoid hand-expressing or using a mechanical breast pump",
      "Have the baby nurse from the unaffected breast only",
      "Stop breastfeeding, and supplement feedings with formula until the infection clears",
      "Apply a warm compress to the breast before breastfeeding"
    ],
    answer: ["Apply a warm compress to the breast before breastfeeding"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "78. A patient complains of fever and generalized abdominal pain with tenderness, and is hypotensive with tachycardia. They have a 2-year history of renal failure with nightly peritoneal dialysis. Which of the following would be the highest anticipated diagnosis?",
    options: ["Peritonitis", "Gastroenteritis", "Diverticulitis", "Bowel obstruction"],
    answer: ["Peritonitis"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "79. A 10-week-pregnant patient presents complaining of vaginal spotting with mild abdominal cramping and is discharged with a diagnosis of threatened abortion. Which of the following statements indicates a correct understanding of the discharge instructions?",
    options: [
      "I will keep a count of the number of tampons I use to determine how much I'm bleeding.",
      "I will need to stay on bed rest for at least a day or two.",
      "I can expect the bleeding to get heavier in a day or two.",
      "While I'm on bed rest, my partner and I can have sexual intercourse as long as it isn't too rough."
    ],
    answer: ["I will need to stay on bed rest for at least a day or two."],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "80. A patient presents with thermal burn to the forearm. The burn is very painful and sensitive to air. The patient's forearm area is red, involving the first few layers of the dermis, with a large fluid-filled blister. Which of the following would be the appropriate classification for this burn injury?",
    options: ["Superficial burn", "Fourth-degree burn", "Superficial partial-thickness burn", "Full-thickness burn"],
    answer: ["Superficial partial-thickness burn"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "81. A patient presents with chest pain and diaphoresis, and denies dyspnea. Vital signs are BP 148/70 mm Hg, HR 72 beats/minute, RR 18 breaths/minute, SpO2 98% on room air. Breath sounds are clear and equal. The electrocardiogram shows an inferior wall ST-segment elevation. The nurse anticipates which order for oxygen?",
    options: ["No supplemental oxygen at this time", "Nasal cannula at 6 L per minute", "Partial rebreather mask at 10 L per minute", "Nonrebreather mask at 15 L per minute"],
    answer: ["No supplemental oxygen at this time"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "82. A patient complains of chest pain, dyspnea, and diaphoresis. Which of the following assessment factors would indicate a possible diagnosis of acute coronary syndrome?",
    options: ["Pleuritic chest pain", "Positional chest pain", "Chest pain that radiates to both shoulders", "Pain reproducible with chest wall palpation"],
    answer: ["Chest pain that radiates to both shoulders"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "83. A patient presents to the emergency department with abdominal pain and 'ripping' back pain. Which condition places the patient at risk for abdominal aortic dissection?",
    options: ["Down syndrome", "Romano-Ward syndrome", "Jervell and Lange-Nielsen syndrome", "Ehler-Danlos syndrome"],
    answer: ["Ehler-Danlos syndrome"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "84. A 7-year-old suddenly develops ventricular fibrillation. The child weighs 30 kg (66 lb). Cardiopulmonary resuscitation is started immediately. What is the correct defibrillation dose for the initial shock?",
    options: ["60 joules", "30 joules", "120 joules", "90 joules"],
    answer: ["60 joules"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "85. What electrocardiogram finding would a patient with a suspected tricyclic antidepressant overdose most likely have?",
    options: ["Sinus bradycardia", "Ventricular fibrillation", "Narrow complex supraventricular tachycardia", "Wide complex tachycardia with prolonged QT interval"],
    answer: ["Wide complex tachycardia with prolonged QT interval"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "86. A patient has a pacemaker that only fires when the heart rate slows below a certain number of beats/minute. What pacemaker mode does the patient most likely have?",
    options: ["Asynchronous mode", "Demand mode", "Magnet mode", "Fixed-rate mode"],
    answer: ["Demand mode"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "87. A patient presents with a 24-hour history of abdominal pain, fever, nausea, and watery diarrhea. On further questioning, the patient states that they have been prescribed sulfamethoxazole/trimethoprim (Bactrim) for a urinary tract infection. What would your primary intervention be for this patient?",
    options: [
      "Request a stool sample from the patient",
      "Place the patient in a private room on contact isolation",
      "Prepare to infuse an isotonic crystalloid solution bolus",
      "Prepare to administer antibiotics"
    ],
    answer: ["Place the patient in a private room on contact isolation"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "88. Which of the following is considered an appropriate treatment for a patient with a venomous snake bite?",
    options: [
      "Immobilize the involved area at or below above the level of the heart, and mark the leading edge",
      "Administer hepatitis B vaccine as soon as possible, and continue recommended dosing",
      "Immediately apply ice packs and elevate the extremity",
      "Contact poison control to have a specific antivenin prepared from the individual snake"
    ],
    answer: ["Immobilize the involved area at or below above the level of the heart, and mark the leading edge"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "89. A potential sign commonly associated with the presence of cyanide poisoning is:",
    options: ["Cherry-red skin", "Symmetrical descending muscular weakness", "Excessive secretions", "Severe respiratory distress"],
    answer: ["Severe respiratory distress"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "90. The key to safe and effective care of the trauma patient is which of the following?",
    options: ["Identified roles and responsibilities of the team members", "Group diversity", "Individual mental processes and individual leadership", "Engaging in individual member review of performance activities"],
    answer: ["Identified roles and responsibilities of the team members"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "91. The child of a hospital employee has died in the emergency department. The staff and hospital employees are visibly upset and are having difficulty coping with the child's death. As a result, the hospital administration decides to conduct a critical incident report stress management (CISM) debriefing. Ideally, the CISM debriefining should take place within what time frame?",
    options: [
      "As soon as possible",
      "Within 24-72 hours",
      "Within 3-5 days",
      "Within 1 week"
    ],
    answer: ["Within 24-72 hours"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "92. The nurse is aware that lifelong learning is an essential career element that leads to the achievement of which of the following?",
    options: [
      "Professional expertise",
      "Promotion to a management position",
      "Academic success",
      "Personal fulfillment"
    ],
    answer: ["Professional expertise"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "93. Accurate documentation of the 'chain of custody' in the handling of forensic evidence is necessary to ensure which of the following?",
    options: [
      "Validating the competency of the individual who collected the evidence",
      "Safeguarding the integrity of the evidence",
      "Providing law enforcement with evidence needed to convict the suspected criminal",
      "Limiting the number of individuals who handle the evidence"
    ],
    answer: ["Safeguarding the integrity of the evidence"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "94. The nurse is aware that the most reliable method of assessing a patient's pain is which of the following?",
    options: [
      "Using a nurse-initiated pain management protocol",
      "Observing specific pain-associated behaviors, such as grimacing or crying",
      "Asking the patient to describe what pain-relieving medications have been effective for them in the past",
      "Acknowledging the patient's self-report of pain"
    ],
    answer: ["Acknowledging the patient's self-report of pain"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "95. A 5-year-old patient presents to the hospital and requires a dose of oral medication for the illness. The nurse understands that this patient is at increased risk for medication errors because of the following:",
    options: [
      "Inability to swallow medications",
      "Parent being a poor historian",
      "Patient having no known allergies",
      "Weight-based dosing"
    ],
    answer: ["Weight-based dosing"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "96. A patient with an acute myocardial infarction is being prepared for transport by emergency medical services (EMS) to the nearby medical center. The patient is stable but is receiving multiple intravenous vasoactive medications. The nurse should be most concerned with which of the following?",
    options: [
      "The patient's spouse is insisting that they ride along in the ambulance.",
      "The patient is being transferred via ground ambulance rather than helicopter.",
      "The transport team comprises individuals with training in basic life support.",
      "The patient experiences motion sickness when flying or riding in a vehicle."
    ],
    answer: ["The transport team comprises individuals with training in basic life support."],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "97. A non-English-speaking patient presents to the triage nurse. The best method for the triage nurse to effectively communicate with the patient is to use which of the following?",
    options: [
      "A member of the healthcare staff who speaks the patient's native language",
      "A member of the patient's family or a friend",
      "An illustrated chart for the patient to point at descriptors of the symptoms",
      "A certified translator fluent in the patient's native language"
    ],
    answer: ["A certified translator fluent in the patient's native language"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "98. The nurse caring for a geriatric patient delegates hourly vital signs to unlicensed assistive personnel (UAP). The UAP staff does not report a hypotensive blood pressure to the nurse and only documents it on the patient's chart. As a result, the patient suffers a poor outcome. Who is at fault for not reporting the hypotensive blood pressure to the physician?",
    options: [
      "The nurse who delegated the task of vital signs",
      "The assistive staff member who took the patient's vital signs",
      "The charge nurse on the unit",
      "The patient's primary care provider"
    ],
    answer: ["The nurse who delegated the task of vital signs"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "99. Using the mass casualty START triage system for adults, which of the following patients would be classified as a yellow (delayed) patient?",
    options: [
      "A patient who is able to stand and walk to a designated area as instructed",
      "A patient who is unable to ambulate, with a respiratory rate of 32 breaths/minute",
      "A patient who is unable to ambulate, has no spontaneous respirations even with repositioning of the airway, has an absent central pulse, and does not follow commands",
      "A patient who is unable to ambulate and who can follow commands, with a respiratory rate under 30 breaths/minute"
    ],
    answer: ["A patient who is unable to ambulate and who can follow commands, with a respiratory rate under 30 breaths/minute"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "100. The National Incident Management System requires that hospitals have plans and procedures in place to be prepared for emergency management situations, such as mass casualty incidents and disasters. Which system helps hospitals create a command structure to be better prepared for these incidents?",
    options: [
      "Federal Emergency Management Agency (FEMA)",
      "National Response Framework",
      "Hospital Incident Command System (HICS)",
      "Disaster Medical Assistance Team (DMAT)"
    ],
    answer: ["Hospital Incident Command System (HICS)"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "101. To be compliant with the U.S. Emergency Medical Treatment and Active Labor Act, all patients presenting to the emergency department must have had which of the following performed?",
    options: [
      "Triage assessment by a registered nurse",
      "Emergency Severity Index acuity level assigned",
      "Medical screening exam (MSE)",
      "At least one set of vital signs"
    ],
    answer: ["Medical screening exam (MSE)"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "102. An unresponsive trauma patient is brought in by ambulance. No family members are present, and no contact information is available for the patient's family. It is appropriate for hospital personnel to treat this patient based on which type of consent?",
    options: [
      "Implied consent",
      "Expressed consent",
      "Involuntary consent",
      "Informed consent"
    ],
    answer: ["Implied consent"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "103. According to the Joint Commission, the overwhelming majority of serious medical errors that occur during patient handoff can be attributed to which type of mechanism?",
    options: [
      "Equipment failure",
      "Inappropriate staffing mix at the receiving facility",
      "Communication breakdown",
      "Use of unapproved abbreviations"
    ],
    answer: ["Communication breakdown"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "104. A patient who recently returned from a trip to East Africa presents is patient is complaining of fever, abdominal pain, bloody diarrhea, and weakness. The nurse recognizes that this patient is most at risk for which disease?",
    options: [
      "Ebola virus",
      "Chickenpox",
      "Gastroenteritis",
      "Influenza"
    ],
    answer: ["Ebola virus"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "105. Which of the following is an early sign of impending shock during the initial assessment of an adult patient?",
    options: [
      "Respiratory rate greater than 22 breaths/minute",
      "Systolic blood pressure greater than 90 mm Hg",
      "Temperature of 37°C (98.6°F)",
      "Capillary refill less than 2 seconds"
    ],
    answer: ["Respiratory rate greater than 22 breaths/minute"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "106. The four classifications of radiation particles that can affect life are alpha particles, beta particles, gamma radiation, and neutrons. Of these four, which can penetrate the most objects (paper, wood, concrete) and is therefore more dangerous to life?",
    options: [
      "Gamma radiation",
      "Beta particles",
      "Neutrons",
      "Alpha particles"
    ],
    answer: ["Neutrons"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "107. A child is brought to the emergency department after falling through the ice while skating on a lake. On arrival, the patient's core temperature is 26.8°C (80.2°F). The nurse would anticipate this patient to exhibit which signs or symptoms?",
    options: [
      "Slow or slurred speech",
      "An increased respiratory rate and effort",
      "An increased urinary output",
      "Unresponsive, not shivering but with vital signs"
    ],
    answer: ["Unresponsive, not shivering but with vital signs"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "108. Which of the following patients should receive rabies prophylaxis?",
    options: [
      "The patient with a bite from a pet cat",
      "The patient with a bite from a pet dog",
      "The patient who may or may not have been bitten by a bat in the house",
      "The patient who may or may not have been bitten by a guinea pig"
    ],
    answer: ["The patient who may or may not have been bitten by a bat in the house"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "109. A patient is being discharged following treatment for excessive vomiting and diarrhea from a possible food-borne illness. You know the patient understands the discharge instructions when the patient states:",
    options: [
      "I will drink clear liquids, such as noncaffeinated sports drinks, for the next 24 hours.",
      "I will be able to eat my regular diet when I leave here.",
      "Drinking milk will settle my stomach.",
      "Washing my fruits and vegetables before eating them is not necessary."
    ],
    answer: ["I will drink clear liquids, such as noncaffeinated sports drinks, for the next 24 hours."],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "110. The nurse is providing discharge education for an adult patient diagnosed with an infestation of Sarcoptes scabiei (scabies). Which of the following patient statements indicates that the patient understands the discharge instructions?",
    options: [
      "I should not go to work or school for 7 days following treatment.",
      "I must discard all of my clothing and linens prior to treatment.",
      "I may continue to experience itching for up to 7 days following treatment.",
      "It is not necessary for my family members to receive treatment."
    ],
    answer: ["I may continue to experience itching for up to 7 days following treatment."],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "111. A patient presents with fever and a small, flat, pink, nonpruritic macular rash on the palms of their hands and soles of their feet. The patient describes removing a tick from their forearm several days ago. Which tickborne disease would you suspect this patient has?",
    options: [
      "Tularemia",
      "Rocky Mountain spotted fever",
      "Lyme disease",
      "Colorado tick fever"
    ],
    answer: ["Rocky Mountain spotted fever"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "112. A 14-year-old patient is being evaluated for symptoms of extreme fatigue, fever, sore throat, body aches, and rash, and there is a 'knot' in the left axilla. You suspect the patient may have:",
    options: [
      "Abscess to left axilla.",
      "Infectious mononucleosis.",
      "Strep throat.",
      "Meningitis."
    ],
    answer: ["Infectious mononucleosis."],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "113. In preparing the body of an organ donor for eye tissue donation, the nurse should perform which of the following?",
    options: [
      "Close the eyes and cover the eyelids with dry, sterile gauze",
      "Apply warm compresses to the eyelids to promote circulation",
      "Elevate the head of the bed 20 degrees",
      "Prepare the patient for transfer to the operating room"
    ],
    answer: ["Elevate the head of the bed 20 degrees"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "114. The nurse is caring for a patient who had a tonic-clonic seizure and is now confused, appears anxious, and has noticeable hand tremors. Vital signs are BP 140/90 mm Hg, HR 128 beats/minute, RR 26 breaths/minute, SpO2 98%, T 37.4°C (99.3°F). The patient reports that they consume alcohol daily but stopped drinking alcohol about two days ago. What is the priority concern for this patient?",
    options: [
      "Injury",
      "Decreased cardiac output",
      "Hallucinations",
      "Dehydration"
    ],
    answer: ["Injury"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "115. Paramedics report that an adolescent patient was drinking an unknown amount of alcohol at a party. The patient is lethargic and only responds to painful stimuli by moaning. Vital signs are BP 110/60 mm Hg, HR 122 beats/minute, RR 14 breaths/minute, SpO2 94%, T 36.2°C (97.1°F). Which of the following diagnostic studies has the highest priority?",
    options: [
      "Serum glucose level",
      "Computed tomography of the head",
      "Blood alcohol level",
      "Urine toxicology screen"
    ],
    answer: ["Serum glucose level"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "116. An adolescent is brought in from a 'rave' party after experiencing seizure. The patient is confused and agitated. Vital signs are BP 180/98 mm Hg; HR 136 beats/minute; RR 26 breaths/minute; T 39.6°C (103.2°F). Which of the following would be the first nursing intervention for this patient?",
    options: [
      "Initiate seizure precautions",
      "Obtain a urine sample for analysis",
      "Initiate an intravenous line with a large-caliber catheter",
      "Administer a short-acting benzodiazepine"
    ],
    answer: ["Initiate seizure precautions"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "117. A nurse is caring for a patient who was found lying on the floor for two days, following a fall. The patient's skin assessment reveals an area of purple discoloration along the patient's greater trochanter, which is boggy and warm to the touch. The nurse recognizes this wound as a(n):",
    options: [
      "potential deep tissue injury",
      "area of ecchymosis",
      "stage 1 pressure ulcer",
      "stage 4 pressure ulcer"
    ],
    answer: ["potential deep tissue injury"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "118. A motorcyclist arrives via ambulance following a collision with a motor vehicle. The patient was helmeted and wearing leather clothing and was thrown across the hood of the car. The patient's primary survey revealed no deficits; however, the secondary survey reveals pain, paresthesia, and weakness to the right arm and hand. There is no swelling, pallor, or coolness in the extremity. The nurse recognizes the patient has signs and symptoms of which of the following?",
    options: [
      "Brachial plexus injury",
      "Compartment syndrome",
      "Fracture of the humerus",
      "Brachial artery dissection"
    ],
    answer: ["Brachial plexus injury"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "119. A patient has a severely increased thoracic curve, or 'humpback.' What term will the nurse use to describe this condition?",
    options: [
      "Kyphosis",
      "Lordosis",
      "Genu varum",
      "Scoliosis"
    ],
    answer: ["Kyphosis"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "120. Which of the following conditions involves an insufficient amount of available antidiuretic hormone and results in the patient urinating large amounts of diluted urine?",
    options: [
      "Diabetes insipidus (DI)",
      "Adrenal crisis",
      "Syndrome of inappropriate antidiuretic hormone (SIADH)",
      "Cushing's syndrome"
    ],
    answer: ["Diabetes insipidus (DI)"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "121. Which assessment finding would be expected in a patient with adrenal crisis?",
    options: [
      "Hypotension",
      "Hypokalemia",
      "Hyperglycemia",
      "Bradycardia"
    ],
    answer: ["Hypotension"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "122. A patient presents with a complaint of constant, sharp right-sided chest pain for the past 3 days. The pain is worse with breathing and arm movement. Vital signs are BP 108/70 mm Hg, HR 68 beats/minute, RR 18 breaths/minute, SpO2 99% on room air, T 37°C (98.6°F). The patient denies shortness of breath or recent trauma but reports a recent upper respiratory infection. The nurse anticipates interventions for which of the following?",
    options: [
      "Pericarditis",
      "Pulmonary contusion",
      "Anxiety",
      "Costochondritis"
    ],
    answer: ["Costochondritis"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "123. A patient presents with 'aching' eye pain associated with the sudden onset of blurred vision after being hit in the eye with a ball. Visual acuity exam reveals no loss of vision. Which of the following complaints would cause the nurse the most significant concern?",
    options: [
      "Increased lacrimation",
      "A decreased ability to look upward",
      "Patient reporting that everything appears red",
      "Cloudy appearance to the cornea"
    ],
    answer: ["Patient reporting that everything appears red"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "124. A geriatric patient presents with complaints of acute-onset blindness in the left eye. The patient reports two prior episodes that resolved after a few seconds and denies pain or recent trauma. The nurse anticipates the patient has experienced which of the following?",
    options: [
      "Retinal detachment",
      "Acute angle-closure glaucoma",
      "Anterior uveitis",
      "Central retinal artery occlusion"
    ],
    answer: ["Central retinal artery occlusion"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "125. A 3-year-old is being discharged with a diagnosis of conjunctivitis. The nurse knows that the parents understood instructions when they state:",
    options: [
      "My child may return to daycare when there is no crusting around the eyes.",
      "My child may not attend daycare until the eye infection has resolved.",
      "My child may continue to sleep in the same bed with his brother.",
      "My child may return to school tomorrow because it is only viral conjunctivitis."
    ],
    answer: ["My child may not attend daycare until the eye infection has resolved."],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "126. A geriatric patient presents with complaints of a severe boring type of pain of the right eye, nausea, and seeing halos around objects. The patient was diagnosed with acute angle-closure glaucoma and received 500 mg of acetazolamide (Diamox) intravenously and 500 mg orally, and timolol (Timoptic) drops into the right eye. The nurse identifies that this therapy has been effective when which of the following occurs?",
    options: [
      "The patient's intraocular pressure is 35 mm Hg.",
      "The patient's intraocular pressure is 20 mm Hg.",
      "The patient's nausea has resolved.",
      "The patient's pain has resolved."
    ],
    answer: ["The patient's intraocular pressure is 20 mm Hg."],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "127. A patient presents after being splashed in both eyes with a cleaning solution. During the assessment, the nurse notes the presence of bilateral corneal clouding and immediately initiates eye irrigation. The nurse knows that irrigation may be discontinued when:",
    options: [
      "the ocular pH reaches 7.0 in each eye.",
      "1 hour has passed.",
      "the pain in each eye has been relieved.",
      "1000 mL of irrigation solution has been used."
    ],
    answer: ["the ocular pH reaches 7.0 in each eye."],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "128. A patient with a history of diabetes presents with complaints of increasing left eye swelling and severe pain in the movement of eye. On assessment, the patient demonstrates decreased pupil visual acuity, decreased pupilar reflexes, and erythema and edema of the eyelids and the left cheek area. The nurse recognizes that the signs and symptoms are consistent with:",
    options: [
      "conjunctivitis",
      "anterior uveitis",
      "iritis",
      "orbital cellulitis"
    ],
    answer: ["orbital cellulitis"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "129. A patient presents to triage complaining of pain in the right distal forearm after falling onto their outstretched arm. There is an obvious deformity above the patient's right wrist. Right radial pulse is present, and color and sensation are intact distally; however, the patient is unable to sustain a wrist grip. The nurse is aware that it is best to immobilize the right forearm using an:",
    options: [
      "traction splint",
      "padded rigid long arm splint",
      "pillow and sling",
      "ice pack and elastic bandage"
    ],
    answer: ["padded rigid long arm splint"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "130. A patient presents with possible signs and symptoms of compartment syndrome 2 days after surgery for a fractured left tibia/fibula. Which of the following would alert the nurse that this patient may be experiencing a worsening complication?",
    options: [
      "Rales",
      "Jaundice",
      "Dark, scanty urine",
      "Generalized edema"
    ],
    answer: ["Dark, scanty urine"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "131. A patient presents to triage with a complaint of a headache, and appears anxious and restless. The patient reports that the 'man at the desk' has followed him from Russia, where he worked for the Central Intelligence Agency, and that the headache began after the tracking chip implanted in his brain was activated. The nurse suspects that the cause of the patient's symptoms is related to:",
    options: [
      "an anxiety attack",
      "migraine headache",
      "dementia",
      "psychosis"
    ],
    answer: ["psychosis"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "132. A patient reports a history of generalized anxiety disorder that is controlled with 0.5 mg of alprazolam (Na-nax) 3 times daily as needed. Which of the following patient statements requires additional follow-up and patient education by the nurse?",
    options: [
      "I do not take the Xanax every day.",
      "I only take the Xanax before participating in stressful events to prevent anxiety.",
      "I drink several glasses of wine in one sitting on a regular basis.",
      "I eat a lot of dairy products frequently and sometimes take the Xanax with milk."
    ],
    answer: ["I drink several glasses of wine in one sitting on a regular basis."],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "133. An elderly patient arrives via emergency medical services with profuse epistaxis that has persisted for over an hour. After initiating universal precautions, the next priority intervention for the nurse to perform is which of the following?",
    options: [
      "Obtain blood pressure",
      "Initiate intravenous access",
      "Maintain airway patency",
      "Initiate direct pressure by instructing the patient to pinch their nostrils"
    ],
    answer: ["Maintain airway patency"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "134. What is the priority assessment for a patient who has sustained a traumatic laceration to the upper arm?",
    options: [
      "Range of motion in the fingers",
      "Distal or radial pulse",
      "Capillary refill",
      "Skin color and temperature"
    ],
    answer: ["Distal or radial pulse"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "135. Which wound is the highest risk for development of osteomyelitis?",
    options: [
      "Laceration to the palmar surface of the hand from a carving knife",
      "Stage 1 pressure injury to the heel",
      "Laceration to the elbow from breaking glass",
      "Deep puncture wound in the foot from stepping on a nail"
    ],
    answer: ["Deep puncture wound in the foot from stepping on a nail"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "136. The nurse is preparing to discharge a patient who has received treatment to close a facial laceration. The nurse recognizes the patient's understanding of the discharge instructions when the patient states:",
    options: [
      "I will be sure to call my doctor in the morning for a prescription for an antibiotic.",
      "I need to place a thin layer of antibiotic ointment over the sutures daily.",
      "I will be sure to have my staples removed after 1 week.",
      "I will return to the emergency department in 14 days for suture removal."
    ],
    answer: ["I need to place a thin layer of antibiotic ointment over the sutures daily."],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "137. A patient reports that while descending from a ladder, they unintentionally fired a nail gun into their right thigh. Immediately following, the patient was unable to straighten their leg, and their coworkers had to cut the patient's jeans off from around the nail head. A radiograph reveals the presence of a foreign body embedded in the patient's right femur. The nurse anticipates that this injury will be managed as a(n):",
    options: [
      "foreign body",
      "open fracture",
      "comminuted fracture",
      "high-pressure grease injury"
    ],
    answer: ["open fracture"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "138. A parent presents to triage with a toddler, stating that the child fell while walking and now will not move their left arm. However, the child fell on their right side. What should the triage nurse do next?",
    options: [
      "Obtain a radiograph of the right arm per standing orders",
      "Suspect child maltreatment because the story does not match the injury",
      "Ask the parent if the left arm was held to try and prevent the fall",
      "Assess the injured left arm by using passive range of motion"
    ],
    answer: ["Ask the parent if the left arm was held to try and prevent the fall"],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "139. When providing discharge instructions to the parents of a child, the nurse is aware that the parents have understood the importance of avoiding products that contain aspirin when they state which of the following?",
    options: [
      "Aspirin may make them ill if I give it while they have a fever and a virus.",
      "Aspirin is less effective in controlling fevers in children because of their immature neurologic system.",
      "Aspirin may cause an increased risk of febrile seizures, given its slower onset of action.",
      "Aspirin usage in febrile children is associated with the development of asthma."
    ],
    answer: ["Aspirin may make them ill if I give it while they have a fever and a virus."],
    multipleAnswer: false,
  },
  {
    chapter: "Chapter 6",
    question: "140. A patient arrives via emergency medical services with sudden onset of altered level of consciousness. The patient was found wandering at the local bus station, is able to answer questions only after much though and is unable to recognize that they are currently in a hospital. The patient demonstrates anxiety, is diaphoretic, and has become agitated with tremors to bilateral arms. Which of the following problem tests would be the first priority for the nurse to obtain in order to assist in proper diagnosis of this problem?",
    options: [
      "Serum creatinine",
      "Urinalysis",
      "White blood cell count",
      "Serum glucose"
    ],
    answer: ["Serum glucose"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "141. A patient complains of transient palpitations and occasional numbness and tingling of their fingers and nose. While vital signs are being obtained, the nurse observes a sudden onset of carpal spasms on the arm on which the blood pressure cuff is being inflated. The nurse recognizes that this finding is consistent with the presence of:",
    options: [
      "hypocalcemia",
      "hypercalcemia",
      "hypokalemia",
      "hyperkalemia"
    ],
    answer: ["hypocalcemia"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "142. Which of the following laboratory test values would alert a nurse that a patient with disseminated intravascular coagulation (DIC) is beginning to improve?",
    options: [
      "Elevated D-dimer",
      "Increased platelet count",
      "Prolonged partial thromboplastin time",
      "Increased prothrombin"
    ],
    answer: ["Increased platelet count"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "143. A patient presents to triage with a complaint of chest pain, shortness of breath, fever, cough, and wheezing. The patient is tachypneic and has diminished breath sounds. The patient's medications include lisinopril, metformin, and hydroxyurea. The patient is a poor historian and is refusing to answer questions. The nurse should be most concerned about which potential diagnosis for this patient?",
    options: [
      "Acute chest syndrome",
      "Acute myocardial infarction",
      "Chronic obstructive bronchitis",
      "Superior vena cava syndrome"
    ],
    answer: ["Acute chest syndrome"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "144. Parents report that their adolescent has demonstrated recent behavior changes, including extreme anger with family members, no desire to complete required tasks (attend school or do chores), racing thoughts with rapid speech, and impulsive actions. The nurse suspects which psychiatric disorder is being demonstrated by the patient?",
    options: [
      "Psychosis",
      "Attention-deficit hyperactivity disorder",
      "Bipolar disorder",
      "Panic disorder"
    ],
    answer: ["Bipolar disorder"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "145. When suspecting the presence of child maltreatment or neglect in a patient, the nurse is required to:",
    options: [
      "document the names of the suspected abusers in the medical record.",
      "inform the parent of the police notification.",
      "report the suspected abuse or neglect to the police and child protective services.",
      "review the pediatrician or family physician records."
    ],
    answer: ["report the suspected abuse or neglect to the police and child protective services."],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "146. A 20-kg child presents with a 2-day history of vomiting and diarrhea. The child is now being orally rehydrated and is ready for discharge home with the parents. Which of the following would be most important to include in the home care discharge instructions?",
    options: [
      "Administer small amounts (1 teaspoon) of clear liquids at frequent intervals",
      "Resume normal meals in small amounts",
      "Start a BRAT (bananas, rice, applesauce, toast) diet",
      "Administer small amounts (1 teaspoon) of apple juice at frequent intervals"
    ],
    answer: ["Administer small amounts (1 teaspoon) of clear liquids at frequent intervals"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "147. An older adult patient presents after demonstrating aggressive behavior in the patient's group home residence. The patient is pale, diaphoretic, and displaying tonic-clonic movement. Which laboratory test has the highest priority for this patient?",
    options: [
      "Venous blood gas",
      "Blood glucose level",
      "Blood alcohol level",
      "Sodium level"
    ],
    answer: ["Blood glucose level"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "148. Which of the following is a late sign of increased intracranial pressure in a patient with a large subarachnoid hemorrhage?",
    options: [
      "Sluggish pupils",
      "Narrowing pulse pressure",
      "Bradycardia",
      "Behavioral changes"
    ],
    answer: ["Bradycardia"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "149. When caring for an adult patient with Alzheimer's dementia, the nurse is aware that a patient with mild dementia will exhibit which of the following symptoms?",
    options: [
      "Episodes of wandering",
      "Difficulty handling finances",
      "Short-term memory loss",
      "Loss of facial recognition"
    ],
    answer: ["Short-term memory loss"],
    multipleAnswer: false
  },
  {
    chapter: "Chapter 6",
    question: "150. A patient with a recent history of anterior myocardial infarction (MI) develops severe shortness of breath. Crackles are noted bilaterally on auscultation. An echocardiogram shows an ejection fraction of 30%. The nurse is concerned that the patient may have decompensated heart failure progressing to cardiogenic shock. What is the priority intervention in this situation?",
    options: [
      "Nitroglycerin infusion",
      "Furosemide (Lasix) administration",
      "Bilevel positive airway pressure (BiPAP)",
      "Dobutamine infusion"
    ],
    answer: ["Bilevel positive airway pressure (BiPAP)"],
    multipleAnswer: false
  }
];
