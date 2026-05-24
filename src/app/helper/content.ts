export interface Question {
  chapter: string;
  question: string;
  options: string[];
  answer: string[];
  multipleAnswer: boolean;
}

export const questions: Question[] = [
  {
    chapter: 'Anatomy and Physiology',
    question: '1. Subarachnoid hemorrhage is most commonly caused by',
    options: [
      'Aneurysmal rupture',
      'Arteriosclerotic vascular disease', 'Arteriovenous vascular malformation rupture',
      'Amyloid angiopathy'],
    answer: ['Aneurysmal rupture'],
    multipleAnswer: false
  },
  {
    chapter: 'Anatomy and Physiology',
    question: '2. The dural fold that separates the cerebrum from the cerebellum is the',
    options: [
      'Corpus callosum',
      'Tentorium',
      'Falx',
      'Posterior fossa'],
    answer: ['Tentorium'],
    multipleAnswer: false
  },
  {
    chapter: 'Anatomy and Physiology',
    question: '3. The innermost meningeal layer that fits the brain like a latex glove fits the hand is the',
    options: [
      'Dura mater',
      'Arachnoid mater',
      'Central mater',
      'Pia mater'],
    answer: ['Pia mater'],
    multipleAnswer: false
  },
  {
    chapter: 'Anatomy and Physiology',
    question: '4. The frontal lobe contains which of the following?',
    options: [
      'Wernicke\'s area',
      'Motor strip',
      'Sensory strip',
      'Globus pallidus'],
    answer: ['Motor strip'],
    multipleAnswer: false
  },
  {
    chapter: 'Anatomy and Physiology',
    question: '5. The postcentral gyrus is located in the',
    options: [
      'Parietal lobe',
      'Occipital lobe',
      'Pons',
      'Cerebellum'],
    answer: ['Parietal lobe'],
    multipleAnswer: false
  },
  {
    chapter: 'Anatomy and Physiology',
    question: '6. Which of the following best describes the homunculus?',
    options: [
      'Portion of midbrain responsible for being awake and aware',
      'Another n a m e for the large third ventricle',
      'Diagram that represents the optic path from frontal to occipital lobe',
      'Diagram that depicts what body parts are controlled by the motor/ sensory strips'],
    answer: ['Diagram that depicts what body parts are controlled by the motor/ sensory strips'],
    multipleAnswer: false
  },
  {
    chapter: 'Anatomy and Physiology',
    question: '7. The ______ is the relay station between the cerebral cortex and brainstem',
    options: [
      'Thalamus',
      'Hypothalamus',
      'Putamen',
      'Circle of Willis'],
    answer: ['Thalamus'],
    multipleAnswer: false
  },
  {
    chapter: 'Anatomy and Physiology',
    question: '8. The diencephalon refers to which structures?',
    options: [
      'Midbrain, pons, medulla',
      'Basal ganglia, putamen, internal capsule',
      'Thalamus, hypothalamus, pineal gland',
      'Thalamus, globus pallidus, caudate nucleus'],
    answer: ['Thalamus, hypothalamus, pineal gland'],
    multipleAnswer: false
  },
  {
    chapter: 'Anatomy and Physiology',
    question: '9. Someone who cannot understand what is said to them has had an infarct of tbe',
    options: [
      'Frontal lobe',
      'Occipital lobe',
      'Temporal lobe',
      'Brainstem'],
    answer: ['Temporal lobe'],
    multipleAnswer: false
  },
  {
    chapter: 'Anatomy and Physiology',
    question: '10. Which brainstem structure connects to the spinal cord and controls respiratory and heart rates?',
    options: [
      'Medulla oblongata',
      'Pons',
      'Midbrain',
      'Cerebellum'],
    answer: ['Medulla oblongata'],
    multipleAnswer: false
  },
  {
    chapter: 'Anatomy and Physiology',
    question: '11. You are an emergency department (ED) nurse whose patient presented with staggering gait and slurred speech. The patient denies having been drinking and the alcohol level is normal, but the CT scan is positive for an infarct in the',
    options: [
      'Midbrain',
      'Right parietal lobe',
      'Occipital lobe',
      'Cerebellum'],
    answer: ['Cerebellum'],
    multipleAnswer: false
  },
  {
    chapter: 'Anatomy and Physiology',
    question: '12. The most common cardioembolic source for stroke is',
    options: [
      'Mitral valve insufficiency',
      'Endocarditis of the tricuspid valve',
      'Atrial fibrillation',
      'Supraventricular tachycardia'],
    answer: ['Atrial fibrillation'],
    multipleAnswer: false
  },
  {
    chapter: 'Anatomy and Physiology',
    question: '13.  Which of these is not part of the circle of Willis?',
    options: [
      'Middle cerebral arteries',
      'Internal carotid arteries',
      'Posterior communicating arteries',
      'Posterior cerebral arteries'],
    answer: ['Middle cerebral arteries'],
    multipleAnswer: false
  },
  {
    chapter: 'Anatomy and Physiology',
    question: '14. Patients with adequate blood supply around the borders of their infarct zone have good',
    options: [
      'Communicating circulation',
      'Cerebral perfusion pressure',
      'Collateral circulation',
      'Borderline circulation'],
    answer: ['Collateral circulation'],
    multipleAnswer: false
  },
  {
    chapter: 'Anatomy and Physiology',
    question: '15. Which statement is true?',
    options: [
      'The vertebral arteries connect the subclavian arteries and the posterior brain',
      'The basilar arteries connect the common carotids with t h e circle of Willis',
      'The posterior cerebral arteries connect to the cerebellum via the posterior inferior cerebellar artery',
      'The cerebellar arteries connect the vertebral arteries to the spinal arteries'],
    answer: ['The vertebral arteries connect the subclavian arteries and the posterior brain'],
    multipleAnswer: false
  },
  {
    chapter: 'Anatomy and Physiology',
    question: '16. A deep vein thrombosis can cause a stroke only if there is a presence what cardiac structure?',
    options: [
      'Atrial fibrillation', 
      'Endocarditis',
      'Mitral valve regurgitation',
      'Patent foramen ovale'],
    answer: ['Patent foramen ovale'],
    multipleAnswer: false
  },
  {
    chapter: 'Anatomy and Physiology',
    question: '17. Your patient with an anterior cerebral artery territory stroke is acting "frontal". What is the patient doing?',
    options: [
      'Having trouble hearing',
      'Exhibiting left arm weakness',
      'Behaving inappropriately',
      'Seeing double'],
    answer: ['Behaving inappropriately'],
    multipleAnswer: false
  },
  {
    chapter: 'Anatomy and Physiology',
    question: '18. Which syndrome would you think of for a patient who presents with acute right-sided weakness; that is, right facial droop, right arm = 2/5 strength, right leg = 4/5 strength?',
    options: [
      'Middle cerebral artery syndrome',
      'Anterior cerebral artery syndrome',
      'Internal carotid artery syndrome',
      'Lacunar syndrome'],
    answer: ['Middle cerebral artery syndrome'],
    multipleAnswer: false
  },
  {
    chapter: 'Anatomy and Physiology',
    question: '19. Which of the following is not a lacunar syndrome?',
    options: [
      'Disconjugate gaze syndrome',
      'Pure motor syndrome',
      'Pure sensory syndrome',
      'Dysarthria-clumsy hand syndrome'],
    answer: ['Disconjugate gaze syndrome'],
    multipleAnswer: false
  },
  {
    chapter: 'Anatomy and Physiology',
    question: '20. Intraparenchymal hemorrhage is synonymous with',
    options: [
      'Intradural hemorrhage',
      'Subarachnoid hemorrhage',
      'Intracerebral hemorrhage',
      'Intraventricular hemorrhage'],
    answer: ['Intracerebral hemorrhage'],
    multipleAnswer: false
  },
  {
    chapter: 'Anatomy and Physiology',
    question: '21. Ondine`s Curse refers to a syndrome characterized by cessation of respiration during sleep owing to failure of the automatic respiratory center in the',
    options: [
      'Medulla oblongata',
      'Pons',
      'Limbic lobe',
      'Thalamus'],
    answer: ['Medulla oblongata'],
    multipleAnswer: false
  },
  {
    chapter: 'Anatomy and Physiology',
    question: '22. Locked-in syndrome refers to a stroke in which area of the brain?',
    options: [
      'Central occipital lobe',
      'Pons',
      'Thalamus',
      'Right cerebellum'],
    answer: ['Pons'],
    multipleAnswer: false
  },
  {
    chapter: 'Anatomy and Physiology',
    question: '23. Which symptom is characteristic in a patient with damage to the Broca`s area?',
    options: [
      'Dysarthria',
      'Dysphagia',
      'Expressive aphasia',
      'Inability to understand instructions'],
    answer: ['Expressive aphasia'],
    multipleAnswer: false
  },
  {
    chapter: 'Anatomy and Physiology',
    question: '24. The most common cause of intracerebral hemorrhage (ICH) is',
    options: [
      'Extreme hyperthermia causing capillary leakage',
      'Extreme hyperglycemia damaging the blood-brain barrier',
      'Aneurysmal rupture causing high intracranial pressure (ICP)',
      'Hypertension causing arterial wall rupture'],
    answer: ['Hypertension causing arterial wall rupture'],
    multipleAnswer: false
  },
  {
    chapter: 'Anatomy and Physiology',
    question: '25. Which area is affected in patients with extinction, formally known as neglect?',
    options: [
    'Parietal lobe',
    'Medial frontal lobe',
    'Occipital lobe',
    'Basal ganglia'],
    answer: ['Parietal lobe'],
    multipleAnswer: false
  },
  {
    chapter: 'Anatomy and Physiology',
    question: '26. A stroke between t w o adjacent cerebral arteries is known as a/an',
    options: [
    'Lacunar infarct',
    'Watershed infarct',
    'Subacute infarct',
    'Associated infarct'],
    answer: ['Watershed infarct'],
    multipleAnswer: false
  },
  {
    chapter: 'Anatomy and Physiology',
    question: '27. Which of the following best describes the cerebral cortex?',
    options: [
      'Folds of gray matter playing an important role in consciousnes',
      'Folds of white matter playing an important role in consciousnes',
      'Tracts of white matter playing an important role in autonomic function',
      'Tracts of gray matter playing an important role in motor function'],
    answer: ['Folds of gray matter playing an important role in consciousnes'],
    multipleAnswer: false
  },
  {
    chapter: 'Anatomy and Physiology',
    question: '28. The corpus callosum is best described by which of the following statements?',
    options: [
      'A band of gray matter fibers that facilitates communication between the cerebral cortex and the brainstem',
      'A band of white matter fibers that facilitates communication between the left and right hemispheres',
      'The posterior portion of the petrosal sinus that facilitates drainage between transverse sinus and jugular vein',
      'The sixth ventricle present in approximately 20% of the population'],
    answer: ['A band of white matter fibers that facilitates communication between the left and right hemispheres'],
    multipleAnswer: false
  },
  {
    chapter: 'Anatomy and Physiology',
    question: '29. The vascular wall structure that is impacted by uncontrolled diabetes and hypertension is the',
    options: [
      'Tunica media',
      'Tunica adventitia',
      'Tunica intima',
      'Tunica lateralis'],
    answer: ['Tunica intima'],
    multipleAnswer: false
  },
  {
    chapter: "Anatomy and Physiology",
    question: "30. Arteriovenous malformations ( AV M s ) can result in an hemorrohage stroke. This is due to which of the following reasons?",
    options: [
      "Arteries and veins connecting directly rather than the usual route of arteries to arterioles, to capillaries, to venules, to veins",
      "Connection of arteries to veins is underdeveloped",
      "Circle of Willis anomalies",
      "Arteries and veins become fused as a result of chronic hypertension"],
    answer: ["Arteries and veins connecting directly rather than the usual route of arteries to arterioles, to capillaries, to venules, to veins"],
    multipleAnswer: false,
  },
  {
    chapter: "Anatomy and Physiology",
    question: "31. Name the condition that is related to a hypercoagulable state, but can present as intracerebral hemorrhage (ICH) and is treated with heparinization.",
    options: [
      "Subacute bacterial endocarditis",
      "Horner's syndrome",
      "Moya Moya disease",
      "Venous sinus thrombosis"
    ],
    answer: ["Venous sinus thrombosis"],
    multipleAnswer: false,
  },
  {
    chapter: "Anatomy and Physiology",
    question: "32. The blood-brain barrier plays what role in an acute ischemic stroke?",
    options: [
      "Disruption results in locked-in syndrome",
      "An intact blood-brain barrier provides protection from hyperthermia",
      "Disruption allows the influx of inflammatory cells resulting in edema and hemorrhagic transformation",
      "Partial disruption results in homonymous hemianopia secondary to optic tract irritation"
    ],
    answer: ["Disruption allows the influx of inflammatory cells resulting in edema and hemorrhagic transformation"],
    multipleAnswer: false,
  },
  {
    chapter: "Anatomy and Physiology",
    question: "33. Multiple tiny infarcts in the same hemisphere is a clue to which condition?",
    options: [
      "Binswanger's disease",
      "Incomplete circle of Willis",
      "Vertebral dissection",
      "Carotid dissection"
    ],
    answer: ["Carotid dissection"],
    multipleAnswer: false,
  },
  {
    chapter: "Anatomy and Physiology",
    question: "34. Normal cerebral blood flow is 45 to 60 mL/100 g/min. At what flow rate does irreversible brain damage occur?",
    options: [
      "Less than 40 mL/100 g/min",
      "Less than 30 mL/100 g/min",
      "Less than 20 mL/100 g/min",
      "Less than 10 mL/100 g/min"
    ],
    answer: ["Less than 10 mL/100 g/min"],
    multipleAnswer: false,
  },
  {
    chapter: "Anatomy and Physiology",
    question: "35. Under conditions of hyperthermia, what changes occur in the brain?",
    options: [
      "Increase in metabolic needs",
      "Decrease in metabolic needs",
      "Mitochondrial suppression",
      "Cessation of adenosine release"],
    answer: ["Increase in metabolic needs"],
    multipleAnswer: false,
  },
  {
    chapter: "Anatomy and Physiology",
    question: "36. Name the circumstance in which thrombolysis might be administered in a hemorrhagic stroke patient.",
    options: [
      "There is no circumstance for thrombolysis in hemorrhagic stroke",
      "Small subarachnoid hemorrhage", "Intraventricular hemorrhage",
      "Interosseous hemorrhage"],
    answer: ["Intraventricular hemorrhage"],
    multipleAnswer: false,
  },
  {
    chapter: "Preventive Care",
    question: "1. Which is true of a male patient with atrial fibrillation (a-fib) who scores 3 on either the CHADS, (congestive heart failure, hypertension history, age ≥ 75, diabetes, stroke history) or the CHA,DS, -VASc (congestive heart failure, hypertension, age 275, diabetes, stroke history, vascular disease, age 65-74, sex category) scores?",
    options: [
      "He had a history of heart failure and diabetes",
      "He should receive an oral anticoagulant.",
      "He only needs an oral antithrombotic",
      "He is at high risk of bleeding with an anticoagulant"],
    answer: ["He should receive an oral anticoagulant."],
    multipleAnswer: false,
  },
  {
    chapter: "Preventive Care",
    question: "2. A primary care provider (PCP) who initiates a statin medication for a patient whose medical history includes type 2 diabetes and hypertension would be providing what type of stroke care?",
    options: [
      "Secondary prevention",
      "Tertiary prevention",
      "Primary prevention",
      "Primordial prevention"
    ],
    answer: ["Primary prevention"],
    multipleAnswer: false,
  },
  {
    chapter: "Preventive Care",
    question: "3. Your 78-year-old transient ischemic attack (TIA) patient was told by the neurologist on rounds that the patient should consider carotid endarter- ectomy (CEA) for the left carotid artery stenosis of 80%. The patient is concerned because there were never any prior symmptoms and does not like the idea of surgery in the neck. You best response would be:",
    options: [
      "To provide education that research supports this intervention for patien with higher than 70% stenosis and risk factors for stroke (the recent TIA)",
      "To provide active listening, and then offer a second opinion from another provider",
      "To calculate the patient's ABCD, (age (2601, blood pressure, climical features of TIA, duration, and diabetes) score and notify the patient that the score is only 5",
      "To reassure the patient that the neck incision is nearly invisible within"
    ],
    answer: ["To provide education that research supports this intervention for patien with higher than 70% stenosis and risk factors for stroke (the recent TIA)"],
    multipleAnswer: false,
  },
  {
    chapter: "Preventive Care",
    question: "4. You have a family history of atrial fibrillation on your mother's side. She is turning 60 in a few weeks, and asks you how she can do a self-assessment for atrial fibrillation. What will you include in your response?",
    options: [
      "The importance of regular visits to the neighborhood pharmacy for blood pressure (BP) checks",
      "Instructions on checking a radial pulse for rate and rhythm regularity",
      "Deep breathing strategies to regulate heart rhythm",
      "Instructions on monitoring for persistent cough and dyspnea"
    ],
    answer: ["Instructions on checking a radial pulse for rate and rhythm regularity"],
    multipleAnswer: false,
  },
  {
    chapter: "Preventive Care",
    question: "5. You are providing discharge education for your 30-year-old female transient ischemic attack (TIA) patient. Her workup has not revealed a clear etiology for the TIA. Which of the following scenarios would be most concerning to you?",
    options: [
      "She indicates that she occasionally has 3 to 4 beers a day, especially on the weekend, and she is a 1 pack-per-day smoker",
      "Her husband asks if he needs to stop smoking marijuana in the same room as her now",
      "Her history includes that she takes a birth control pill and she is 1 pack-per-day cigarette smoker",
      "She asks you if she will need to take aspirin for the rest of her life because she hates feeling like an old lady"
    ],
    answer: ["Her history includes that she takes a birth control pill and she is 1 pack-per-day cigarette smoker"],
    multipleAnswer: false,
  },
  {
    chapter: "Preventive Care",
    question: "6. In reviewing stroke risk factors at a community health fair, one of the audience members says he has a 20-year history of cigarette smoking. What will you include in your response to the group?",
    options: [
      "Smoking cessation may not help him anymore, but he has a responsibility to those around him",
      "Smoking cessation will eliminate all risk of stroke",
      "Smoking filtered cigarettes reduces the risk of stroke by 50 %",
      "Smoking cessation can result in rapid reduction in stroke risk"
    ],
    answer: ["Smoking cessation can result in rapid reduction in stroke risk"],
    multipleAnswer: false,
  },
  {
    chapter: "Preventive Care",
    question: "7. The international case-control study, the INTERSTROKE study, has found that 10 potentially modifiable risk factors account for what percent of stroke risk?",
    options: [
      "90%",
      "80%",
      "70%",
      "60%"
    ],
    answer: ["90%"],
    multipleAnswer: false,
  },
  {
    chapter: "Preventive Care",
    question: "8. Stroke incidence has remained steady at 800,000 new and recurrent strokes/year, despite the decrease in stroke among people aged 65 to 84 years. Which age group has shown a 44% increase in stroke incidence?",
    options: [
      "Ages 85 to 98 years",
      "Ages 50 to 64 years",
      "Ages 12 to 18 years",
      "Ages 25 to 44 years"
    ],
    answer: ["Ages 25 to 44 years"],
    multipleAnswer: false,
  },
  {
    chapter: "Preventive Care",
    question: "9. Over the decade 1998 through 2008, the rate of first stroke among people over age 65 years decreased by 30% to 40%. Increased use of which two treatments has been credited with contributing to this decline?",
    options: [
      "Tissue plasminogen activator (tPA) and mechanical clot retrieval",
      "Statins and antihypertensive medications",
      "Statins and diabetes medications",
      "Antithrombotics and statins"
    ],
    answer: ["Statins and antihypertensive medications"],
    multipleAnswer: false,
  },
  {
    chapter: "Preventive Care",
    question: "10. All of the following are nonmodifiable risk factors for stroke except which one?",
    options: [
      "Age",
      "Gender",
      "Atrial fibrillation",
      "Race/ethnicity"
    ],
    answer: ["Atrial fibrillation"],
    multipleAnswer: false,
  },
  {
    chapter: "Preventive Care",
    question: "11. Which racial group has a higher incidence of, and mortality from, stroke because of a higher prevalence of hypertension, obesity, and diabetes?",
    options: [
      "Hispanic/Latino Americans",
      "Blacks",
      "Whites",
      "Native Americans",],
    answer: ["Blacks"],
    multipleAnswer: false,
  },
  {
    chapter: "Preventive Care",
    question: "12. As a nurse providing community education about stroke risk, you heat a woman say that her father had a stroke at age 50 years and she won ders if this increases her risk of stroke. You base your response on what knowledge?",
    options: [
      "There has been no genetic link to stroke risk",
      "A parental history of stroke before age 65 years increases stroke risk by 0.1%",
      "A positive family history of stroke increases risk of stroke by 30%",
      "A subtle connection has been found if stroke was due to hypertension"
    ],
    answer: ["A positive family history of stroke increases risk of stroke by 30%"],
    multipleAnswer: false,
  },
  {
    chapter: "Preventive Care",
    question: "13. Which is true of stroke risk related to high cholesterol?",
    options: [
      "Each 1% reduction in total cholesterol is associated with a 0.8% reduction in risk of stroke",
      "Only high-intensity therapy along with fibrates is effective in reducing stroke risk",
      "The beneficial effect of statins is due to their capacity to double the blood-brain barrier",
      "There is a direct correlation between the level of cholesterol and risk of mortality"
    ],
    answer: ["Each 1% reduction in total cholesterol is associated with a 0.8% reduction in risk of stroke"],
    multipleAnswer: false,
  },
  {
    chapter: "Preventive Care",
    question: "14. The American Heart Association (AHA) guidelines for physical activity to reduce stroke risk include:",
    options: [
      "Moderate to vigorous aerobic activity daily for a minimum of 40 minutes/day",
      "Moderate aerobic activity for a minimum of 60 min/day, twice a week",
      "Vigorous aerobic activity for 20 minutes, twice a day, three times a week",
      "Moderate to vigorous aerobic activity for a minimum of 40 minutes/ day, three to four times a week"
    ],
    answer: ["Moderate to vigorous aerobic activity for a minimum of 40 minutes/ day, three to four times a week"],
    multipleAnswer: false,
  },
  {
    chapter: "Preventive Care",
    question: "15. Which of the following combination therapies is thought to provide the most effective ",
    options: [
      "Tight control of hypertension and statin therapy",
      "Glycemic control and antithrombotic therapy",
      "Physical activity and glycemic control",
      "Physical activity and antithrombotic therapy"
    ],
    answer: ["Tight control of hypertension and statin therapy"],
    multipleAnswer: false,
  },
  {
    chapter: "Preventive Care",
    question: "16. Of the following patients with cryptogenic stroke, which would you suspect the etiology to be undiagnosed atrial fibrillation?",
    options: [
      "45-year-old female",
      "85-year-old female",
      "64-year-old male",
      "40-year-old male"
    ],
    answer: ["85-year-old female"],
    multipleAnswer: false,
  },
  {
    chapter: "Preventive Care",
    question: "17. What is the distinction between secondary prevention strategies for stroke patients versus transient ischemic attack (TIA) patients?",
    options: [
      "Blood pressure control is not as critical for TIA patients",
      "Intensive statin therapy is recommended for large vessel stroke patients only",
      "TIA patients do not need follow-up",
      "Prevention strategies are the same for both stroke and TIA"
    ],
    answer: ["Prevention strategies are the same for both stroke and TIA"],
    multipleAnswer: false,
  },
  {
    chapter: "Preventive Care",
    question: "18. Your patient's wife tells you that she dreads the time that he will be allowed to come home from the acute rehabilitation hospital. She says that all of the information she has been getting is overwhelming, and what she really thinks she will need is advice and support after he is home. How can you help her?",
    options: [
      "Communicate her concerns to the care team and ensure that a community resource guide is provided",
      "Familiarize yourself with the resource guide in order to be able to reinforce the information and to supplement with other resources",
      "Provide her with information about a local or online stroke support group",
      "All of the above"
    ],
    answer: ["All of the above"],
    multipleAnswer: false,
  },
  {
    chapter: "Preventive Care",
    question: "19. Your multidisciplinary stroke oversight team has determined that community education about stroke will be a goal for the coming year. What information will be most helpful in developing a strategic plan for this outreach education?",
    options: [
      "Demographic information of the region, such as race, age, and socio-economic status",
      "The number of stroke flyers that can be produced",
      "The number of nurses/health care members interested in participating",
      "The number of stroke survivors in the region"
    ],
    answer: ["Demographic information of the region, such as race, age, and socio-economic status"],
    multipleAnswer: false,
  },
  {
    chapter: "Preventive Care",
    question: "20. In what circumstance would you expect a right-sided carotid artery stenosis to be treated with a stent rather than an endarterectomy?",
    options: [
      "When the degree of stenosis is less than 50% and the patient is over age 80 years",
      "When the procedure needs to be performed within 2 weeks",
      "When the degree of stenosis is higher than 70% and there are ana-tomic or medical conditions present that increase risk of surgery",
      "When the provider who performs endarterectomy is not available"
    ],
    answer: ["When the degree of stenosis is higher than 70% and there are ana-tomic or medical conditions present that increase risk of surgery"],
    multipleAnswer: false,
  },
  {
    chapter: "Preventive Care",
    question: "21. Which of the following is true about long-term monitoring for occult atrial fibrillation?",
    options: [
      "It has been credited with finding 11% more cases of atrial fibrillation than found during hospital stay",
      "It is indicated only for females between 40 and 60 years with crypto-genie stroke",
      "Of the cases found during long-term monitoring, only those with duration over 60 minutes pose risk of stroke",
      "Long-term monitoring involves patients dialing into the control center once daily and holding their finger against the phone speaker for 2 minutes"
    ],
    answer: ["It has been credited with finding 11% more cases of atrial fibrillation than found during hospital stay"],
    multipleAnswer: false,
  },
  {
    chapter: "Preventive Care",
    question: "22. Your transient ischemic attack (TIA) patient has had no other risk factors besides a patent foramen ovale (PFO) revealed on an echocardiogram. The patient expresses concern that the neurologist advised the patient response would be: that discharge would be with only aspirin to prevent a stroke. Your response would be",
    options: [
      "To suggest a second opinion from another specialist such as a cardiologist",
      "To reassure the patent that research evidence supports this as the best treatment because no deep vein thrombosis(DVT) was found",
      "To explain that you have not kept up on the current evidence so you do not really know",
      "To suggest that the patent ask the primary care provider about it at the follow-up visit"
    ],
    answer: ["To reassure the patent that research evidence supports this as the best treatment because no deep vein thrombosis(DVT) was found"],
    multipleAnswer: false,
  },
  {
    chapter: "Preventive Care",
    question: "23. Mrs. Mils has intermittent atrial fibrilation and has been on Coumadin for 3 years. She is now your patient in the neuro intensive care unit with an intracerebral hemorrhage. What are the American Heart Association/ American Stroke Association recommendations for safe resumption of anticoagulation in her case?",
    options: [
      "Oral anticoagulation is safe to start for al patients within 1 week",
      "Anticoagulation resumption should be held for at least 1 week",
      "Low-dose IV anticoagulation should be started within 48 hours",
      "Perform an MRI at 24 hours after admission; if stable, initiate oral anticoagulation"
    ],
    answer: ["Anticoagulation resumption should be held for at least 1 week"],
    multipleAnswer: false,
  },
  {
    chapter: "Preventive Care",
    question: "24. As your multidisciplinary stroke team is reviewing your organization's stroke education content and process, which of the following is important to keep in mind?",
    options: [
      "Daily reinforcement of education provides better chance for retention of information", "A fifth- to sixth-grade reading level is recommended",
      "Poststroke cognitive deficits or emotional distress will impair patients' a n d families' abilities to comprehend",
      "All of the above"],
    answer: ["All of the above"],
    multipleAnswer: false,
  },{
    chapter: "Preventive Care",
    question: "25. Your stroke center serves a community that is predominantly Black (44%), with Whites (32%) and Hispanics (21%) coming in second and third. You have limited personnel resources for community outreach. Which of the following would be the best use of your time / resources?",
    options: [
      "Risk factor screening at the local Crispus Attucks community center",
      "Health fair at a local mall involving a dozen other community organizations",
      "Health talk at the local senior center",
      "Distributing F.A.S.T. cards at a local elementary school"
    ],
    answer: ["Risk factor screening at the local Crispus Attucks community center"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "1. Emergency medical services (EMS) personnel deliver a patient whose blood pressure (BP) has risen from 188/98 enroute to 226/132 on presen-tation. You double check the cuff size, position, and retake it, with same results. You can anticipate which orders?",
    options: [
      "Monitor and notify provider if BP exceeds 240 systolic",
      "Stat continuous infusion of IV calcium channel blocker, with rechecks q 5 to 10 minutes",
      "Stat administration of an oral angiotensin-converting enzyme (ACE) inhibitor, with rechecks every 5 to 10 minutes",
      "Stat administration of single dose IV beta blocker, with recheck in 30 minutes"
    ],
    answer: ["Stat continuous infusion of IV calcium channel blocker, with rechecks q 5 to 10 minutes"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "2. Your patient was brought to the emergency department (ED) by her its band who states that when they went to bed at 10 p.m., his wife seemed fine. He went to the bathroom at 2 a.m. and she was sleeping peacebily bat when he woke up at 6 a.m., he found her siting on the side of the bed mumbling something about her arm not working right. What is her low known well (LKW) time?",
    options: [
      "10 p.m.",
      "6 a.m.",
      "2 a.m.",
      "Unable to determine"
    ],
    answer: ["10 p.m."],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "3. Dysphagia screening is essential because patients with dysphagia are a greater risk of mortality due to",
    options: [
      "Hypoxia secondary to severe coughing",
      "Dehydration secondary to inadequate fluid intake",
      "Heart failure secondary to tachycardía",
      "Pneumonia secondary to aspiration"
    ],
    answer: ["Pneumonia secondary to aspiration"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "4. You have taken a job in the emergency department (ED) of a small com. munity hospital that does not have neurology support. During orienta-tion, you are shown how to use the telestroke equipment. In which situs tion will you be using this equipment?",
    options: [
      "During infusion of IV tissue plasminogen activator (tPA) to monitor for vasospasm",
      "For communication with the family in the waiting room that is located on another floor",
      "For remote neurology/neurosurgery evaluation and treatment recommendation",
      "For quick electronic review of compliance with stroke gutdelines"
    ],
    answer: ["For remote neurology/neurosurgery evaluation and treatment recommendation"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "5. The difference between an emergency medical technician (EMT) and a paramedic is",
    options: [
      "An EMT is a volunteer, while a paramedic is a paid employee",
      "A paramedic receives roughly 10 times the training hours as an EMT",
      "An EMT can start IVs and give injections, while a paramedic cannot",
      "A paramedic can do the prehospital severity scale scoring, while an EMT cannot"
    ],
    answer: ["A paramedic receives roughly 10 times the training hours as an EMT"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "6. The Golden Hour was first described in what population?",
    options: [
      "Stroke",
      "Heart failure",
      "satus epilepticus", 
      "Trauma"
    ],
    answer: ["trauma"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "7. Which is the goal for length of stay (LOS) in the emergency department",
    options: [
      "Less than 24 hours",
      "Between 3 and 6 hours",
      "Less than 3 hours",
      "Minimum of 1 hour"
    ],
    answer: ["Less than 3 hours"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "8. Which action results in shorter time from last known well (LKW) to neurologic evaluation?",
    options: [
      "Calling primary care provider (PCP) immediately",
      "Driving directly to an urgent care center",
      "Driving directly to the emergency department (ED)",
      "Calling 911"
    ],
    answer: ["Calling 911"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "9. Which of the following is not a critical action by emergency medical services (EMS) in acute stroke care?",
    options: [
      "Establishing last known well (LKW) time",
      "Establishing last medication dose/time",
      "Establishing last time lab work was done",
      "Establishing contact info"
    ],
    answer: ["Establishing last time lab work was done"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "10. The primary purpose of emergency medical services (EMS) prenotifica-tion of arrival of a suspected stroke patient is to",
    options: [
      "Allow for mobilization of resources in the emergency department (ED)",
      "Ensure a parking spot in front of the ED",
      "Reduce on-site report time",
      "Facilitate tracking of transport times"
    ],
    answer: ["Allow for mobilization of resources in the emergency department (ED)"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "11. Which of the following is the most common reason for stroke patients not getting acute stroke reperfusion therapy?",
    options: [
      "Symptoms too mild/rapidly improving",
      "Delay in symptom onset to arrival",
      "Presentation at a hospital not certified as stroke center",
      "Use of anticoagulants"
    ],
    answer: ["Delay in symptom onset to arrival"],
    multipleAnswer: false,
  },
  //continue chapter 5 below
  {
    
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "12. Prehospital notification by emergency medical services (EMS) has ben credited with which of the following?",
    options: [
      "Reduced door-to-imaging time",
      "Reduced door-to-needle time",
      "Reduced Interhospital transport time",
      "All of the above"
    ],
    answer: ["All of the above"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "13. Emergency medical services (EMS) should not bypass the closest no stroke-certiled hospital if such diversion would add more than minutes to the transport lime.",
    options: [
      "30 to 40",
      "40 to 50",
      "15 to 20",
      "60"
    ],
    answer: ["15 to 20"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "14. Which of the following is a validated and standardized instrument in prehospital stroke screening?",
    options: [
      "FAST (Face, Arm, Speech, Time)",
      "LAPSS (Los Angeles Prehospital Stroke Scale)",
      "CPSS (Cincinnati Prehospital Stroke Scale)",
      "All of the above"
    ],
    answer: ["All of the above"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "15. Mrs. Brown's husband came in from milking the cows at 8:15 a.m. and found her unable to move her left arm, and looking bewildered. He called 911 and reported she was fine when he had left the house at 700 a.m. He was shocked when a helicopter landed in his yard. Why would the dispatcher have sent a helicopter?",
    options: [
      "All strokes are air transport level now",
      "They suspected a large vessel occlusion (LVO) from the husband! information",
      "The farm is located 50 miles from the closest hospital",
      "Roads were icy"
    ],
    answer: ["The farm is located 50 miles from the closest hospital"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "16. Drip and ship treatment has been significantly increased by",
    options: [
      "Use of telemedicine",
      "Education of emergency department (ED) providers",
      "Reduce cost of tissue plasminogen activator (tPA)",
      "Education of emergency medical services (EMS) providers"
    ],
    answer: ["Use of telemedicine"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "17. Which of the following statements is true about the emergency medical services (EMS) system in the United States?",
    options: [
      "Protocols are consistent across all states",
      "All prehospital personnel are paid and regulated regarding education and competencies",
      "Stroke is a high-urgency call in all areas of the country",
      "Most state EMS are divided into regions/districts that function independently"
    ],
    answer: ["Most state EMS are divided into regions/districts that function independently"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "18. The 2005 revision of hospital diagnosis-related group (DRG) reimbursement resulted in what change?",
    options: [
      "Hospitals receive an additional $4,000 to $6,000 reimbursement for patients to whom they administered IV tissue plasminogen activator (tPA)",
      "Both hub and spoke hospitals receive an additional $5,000 reimbursement for a patient who got IV tPA and was transferred",
      "Hospitals receive $5,000 increased reimbursement for intracerebral hemorrhage (ICH) patients",
      "Hospitals receive $1,000 increased reimbursement for patients with length of stay (LOS) less than 3 days"
    ],
    answer: ["Hospitals receive an additional $4,000 to $6,000 reimbursement for patients to whom they administered IV tissue plasminogen activator (tPA)"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "19. The majority of lawsuits in the United States related to the emergency department (ED) phase of acute ischemic stroke (AIS) care are regarding",
    options: [
      "Hemorrhagic transformation after IV tissue plasminogen activator (tPA)",
      "Failure to offer IV tPA",
      "Delay in CT scanning",
      "Emergency medical service (EMS) transport to wrong hospital"
    ],
    answer: ["Failure to offer IV tPA"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "20. Which type of patient is more likely to be misdiagnosed in the emergency department (ED)? A Patient younger than 35 years with posterior circulation stroke",
    options: [
      "Patient younger than 35 years with posterior circulation stroke",
      "Patient younger than 35 years with anterior circulation stroke",
      "Female older than 35 years with anterior circulation stroke",
      "Patient older than 85 years with dementia"
    ],
    answer: ["Patient younger than 35 years with posterior circulation stroke"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "21. It has been estimated that each 13-minute decrease in IV tissue plasminogen activator (tPA) treatment delay results in",
    options: [
      "Higher reimbursement for the provider",
      "Higher probability of successful Primary Stroke Center (SC) certification/ recertification",
      "More stable blood pressure over 24 hours",
      "One month of additional disability-free life after stroke"
    ],
    answer: ["One month of additional disability-free life after stroke"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "22. There are 7 Ds in the Stroke Chain of Survival: ____, dispatch, delivery, door, data, decision, and drug. Name the first one",
    options: [
      "Directions",
      "Distraction",
      "Detection",
      "Duplication"
    ],
    answer: ["Detection"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "23. Which diagnostic study would you not expect to see done with the stat workup of a 32-year-old female who has arrived 1 hour after onse of stroke symptoms, with a National Institutes of Health Stroke Sce (NISS) scote 7 (arm weakness and sensory loss, aphasia), and no med cal history?",
    options: [
      "Chest x-ray (CXR)",
      "Head CT",
      "Pregnancy test",
      "Serum electrolytes"
    ],
    answer: ["Chest x-ray (CXR)"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "24. If two of the three categories of the Cincinnati Prehospital Stroke Sail are abnormal, what is the probability of the patient having an acti stroke?",
    options: [
      "40%",
      "68%",
      "85%",
      "97%"
    ],
    answer: ["85%"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "25. Which of the following best describes crescendo transient ischem attacks (TIAs)?",
    options: [
      "A series of three or more TIAs that occur in succession",
      "TIAs that occur within 24 hours after stroke",
      "TIAs that follow a seizure",
      "TIAs involving the upper extremities"
    ],
    answer: ["A series of three or more TIAs that occur in succession"],
    multipleAnswer: false,
  },
  {
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "26. Mrs. Newman, a 71-year-old female arrived at the emergency department (ED) at 9:10 a.m. with resolving stroke symptoms. Emergency medical services (EMS) had reported left facial droop, along with left arm weakness, and last known well (LKW) of 6:30 a.m. Her admission National Institutes of Health Stroke Scale (NIHSS) score was 2, and is now 0 at 15 minutes after arrival. Her medical history includes remote smoking history-quit 35 years ago-and hypertension for which she takes lisinopril 10 mg daily and aspirin 81 mg daily. Her CT was negative and point-of-care (POC glucose was 89. While the provider is discussing treatment options with her, she develops a facial droop and left arm weakness with NIHSS of 5. What is your next action?",
    options: [
      "Continue to monitor the patient, knowing that it is too late for thrombolysis",
      "Mix and administer IV tissue plasminogen activator (tPA) as ordered according to her weight",
      "Question the nurse who documented the NIHSS to see if it really was 0 or if there might have been some slight deficit remaining",
      "Call in the endovascular team in anticipation of mechanical thrombectomy"
    ],
    answer: ["Mix and administer IV tissue plasminogen activator (tPA) as ordered according to her weight"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "27. You are a flight nurse for an air medical transport team, and have just arrived at a certified Acute Stroke Ready hospital to pick up a patient for transport to a Comprehensive Stroke Center for management of intrace-rebral hemorrhage (ICH). Your assessment and management during the flight will focus on which of the following?",
    options: [
      "Monitoring blood pressure (BP) and titration of antihypertensive drip to maintain systolic blood pressure (SP) at under 185",
      "Monitoring neurologic status and vitals for early signs of rising intracranial pressure (ICP)",
      "Monitoring reflexes and cranial nerve signs for early vasospasm",
      "Monitoring swallow ability and preparation for early antithrombotic"
    ],
    answer: ["Monitoring neurologic status and vitals for early signs of rising intracranial pressure (ICP)"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "28. Mr. Thome is dropped off at the emergency department (ED) by his wite who then goes to park the car. He is identified in triage as a suspected acute stroke. It takes another 10 minutes to get the CT scanner cleared, and an IV site established. You realize that this is a perfect example of which of the following?",
    options: [
      "The importance of spouses staying with the patient in the ED",
      "The need for a second CT scanner in the ED",
      "The need for a closer parking area for spouses",
      "Benefit of calling 911 and expediting the acute stroke workup process through prearrival notification"
    ],
    answer: ["Benefit of calling 911 and expediting the acute stroke workup process through prearrival notification"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "29. You are a nurse in the interventional suite of a Comprehensive Stroke center and just received a patient from the emergency department (ED) with an apparent large vessel occlusion (LVO) of the middle cerebral artery (MCA) whose blood pressure has risen to 180/90 and pulse oxygenation has slipped to 86%; the patient is also becoming restless. Your best next action would be which of the following?",
    options: [
      "Explain the importance of lying still for the procedure",
      "Change pulse oxygen equipment",
      "Prepare for intubation and sedation",
      "Restrain patient's arms and legs"
    ],
    answer: ["Prepare for intubation and sedation"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "30. Which of the following is not an exclusion criterion for the 3- to 4.5-hour extended window for administration of IV tissue plasminogen activator (tpA)?",
    options: [
      "International normalized ratio (INR) over 1.0",
      "National Institutes of Health Stroke Scale (NIHSS) score over 25",
      "History of stroke and diabetes",
      "Age greater than 80 years"
    ],
    answer: ["International normalized ratio (INR) over 1.0"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "31. Which of the following tools is not used to evaluate for possible large ver sel occlusion (LVO) by emergency medical services (EMS)?",
    options: [
      "RACE (Rapid Arterial Occlusion Evaluation)",
      "LVOS (Large Vessel Occlusion Score)",
      "VAN (Vision, Aphasia, Neglect) score",
      "FAR (Face, Arm, Reach) score"
    ],
    answer: ["FAR (Face, Arm, Reach) score"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "32. Your emergency department (ED) patient has just returned from CT angiography with a diagnosis of aneurysmal subarachnoid hemorrhage SAH). When you check the patient's blood pressure (BP), it is 178/86, Your most appropriate next action will be which of the following?",
    options: [
      "Continue to monitor, knowing that 185/110 is the top limit",
      "Notify the provider and anticipate an order to administer labetalol 10 mg and repeat once with the goal of lowering the systolic blood pressure (SP) to under 140",
      "Administer labetalol 40 mg for SBP to be over 160",
      "Notify the provider and anticipate an order to administer labetalol 10 mg and repeat once with the goal of lowering the SBP to under 160"
    ],
    answer: ["Notify the provider and anticipate an order to administer labetalol 10 mg and repeat once with the goal of lowering the SBP to under 160"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "33. For the acute ischemic stroke patient (A15) in the emergency department (ED), what is the rationale for keeping the head of the bed flat?",
    options: [
      "To remind staff not to give anything orally until after the dysphagia screen is completed",
      "To maximize blood flow to the brain",
      "To facilitate rest by limiting visual stimulation",
      "To minimize risk of headache"
    ],
    answer: ["To maximize blood flow to the brain"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "34. The use of supplemental oxygen has been found to be appropriate for which acute stroke patient?",
    options: [
      "All ischemic stroke patients",
      "All intracerebral hemorrhage (ICH) patients with intracranial pressure (ICP) higher than 16% and O, saturation less than 95%",
      "All stroke patients with O, saturation less than 92%",
      "Only hemorrhagic stroke patients with O, saturation less than 88%"
    ],
    answer: ["All stroke patients with O, saturation less than 92%"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "35. You work in the Neurovascular Intervention (NVD suite of a Comprehensive Stroke Center (CS) and have just received word of two patients coming tor possible thrombectomy. Two other cases fast fin-ished. Which of the four cases described below would you expect less than optimal outcomes?",
    options: [
      "A 85-year-old male with history of hypertension",
      "A 70-year-old female with history of atrial fibrillation and hypertension",
      "A 62-year-old with history of heart failure and hypertension",
      "A 50-year-old with history of diabetes and hypertension"
    ],
    answer: ["A 85-year-old male with history of hypertension"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "36. One of the most effective ways found to improve prehospital stroke care has been which of the following?",
    options: [
      "Increase in the number of paramedics and emergency medical technicians (EMTs) on each call",
      "Stricter blood pressure control measures in ambulances and helicopters",
      "Approval of paramedics administering tissue plasminogen activator (tPA) prior to CT in select patients",
      "Patient-specific feedback provided to transport teams"
    ],
    answer: ["Patient-specific feedback provided to transport teams"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "37. A 78-vear-old woman with a 1-vear history of declining memory developed sudden headache and decreased consciousness and collapsed while washing dishes. Imaging revealed a right lobar hemorrhage. The most likely cause is which of the following?",
    options: [
      "Hypertension",
      "Cerebral amyloid angiopathy",
      "Ruptured arteriovenous malformations (AVM)",
      "Trauma"
    ],
    answer: ["Cerebral amyloid angiopathy"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "38. Your 58-year-old patient arrived within 3.5 hours of symptom onset and her CT scan shows acute intracerebral hemorrhage (ICH). Her husband has been at the bedside looking at his phone, and after the provider has spoken with him about his wife's scan, he asks when she is getting the drug alteplase. What is your best response?",
    options: [
      "Where did you hear about that?",
      "Your wife did not arrive within the timeframe for administering that drug.",
      "Your wife's CT showed that she has bled in her brain, and alteplase is not safe for her case.",
      "Alteplase has been studied for use in some hemorrhagic popula-tions, but your wife's provider doesn't like to do that."
    ],
    answer: ["Your wife's CT showed that she has bled in her brain, and alteplase is not safe for her case."],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "39, A.57-year-old woman presents to the emergency department (ED) 45 min utes after the onset of severe expressive aphasia, right hemiparesis, and hemisensory loss. Her National Institutes of Health Stroke Scale (NIHSS) score is 16. Past medical history is significant for coronary angioplasty and stent placement 4 years ago, and surgery on her left foot 5 days ago She takes aspirin and clopidogrel. On initial presentation, the patients blood pressure was 190/100 mmg and is now 170/90 mmig. Emergent fabs and head CT are normal, The patient's symptoms improve to an NIHSS score of 3-—aphasia (1), hemiparesis (1), and hemisensory loss (1), Which of the following is a contraindication to this patient recerving tissue plasminogen activator (tPA)?",
    options: [
      "Current use of aspirin and clopidogre",
      "NIHSS score of 3",
      "Recent minor surgery",
      "None of the above"
    ],
    answer: ["None of the above"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "40. The Cincinnati Prehospital Stroke Scale includes which of the following assessments?",
    options: [
      "Arm drift, facial symmetry, speech ability",
      "Arm drift, facial numbness, dysphagia screen",
      "Facial symmetry, tongue symmetry, speech ability",
      "Speech ability, arm strength against resistance, forehead symmetry"
    ],
    answer: ["Arm drift, facial symmetry, speech ability"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "41. You are transporting a patient whom you suspect has had a stroke. She is unable to say the words she wants to say, making it difficult to communicate with her. Which of the following describe the problem with her speech?",
    options: [
      "Ataxia",
      "Aphasia",
      "Dysphagia",
      "Dysarthria"
    ],
    answer: ["Aphasia"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "42. Patient D's head CT shows a small intracerebral hemorrhage (ICH). Which of the following in the patient's medical history is the likely etiol-osy of the hemorrhagic stroke?",
    options: [
      "Atrial fibrillation",
      "Hypercholesterolemia",
      "Diabetes",
      "Hypertension"
    ],
    answer: ["Hypertension"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "43. Your 65-year-old female patient is apparently having a stroke. She cannot hold herself in an upright position on the stretcher and has begun to vomit. Which of the following actions would be most appropriate?",
    options: [
      "Provide a basin and towel and reassure her that she will be fine",
      "Place her in the left lateral recumbent position",
      "Insert an oral airway and lower her head",
      "Suction and notify the respiratory technician to bring a ventilator"
    ],
    answer: ["Place her in the left lateral recumbent position"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "44. For a patient with expressive aphasia, which is the best strategy for communication?",
    options: [
      "Speaking more slowly and loudly",
      "Pausing between sentences to allow time to process",
      "Using sign language",
      "Providing pen and paper"
    ],
    answer: ["Providing pen and paper"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "45. All of the following are contributing factors for ischemic brain injury except",
    options: [
      "Blood pressure",
      "International normalized ratio (INR)",
      "Blood glucose",
      "Body temperature"
    ],
    answer: ["International normalized ratio (INR)"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "46. Interruption of cerebral blood flow can be caused by all of the following except",
    options: [
      "Cerebral embolus",
      "Cerebral thrombosis",
      "Cerebral vasodilation",
      "Cerebral vasospasm"
    ],
    answer: ["Cerebral vasodilation"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "47. Which of the following conditions would be least likely to mimic the signs and symptoms of a stroke?",
    options: [
      "Bell's palsy",
      "Hypoglycemia",
      "Complex migraine",
      "Hyponatremia"
    ],
    answer: ["Hyponatremia"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "48. It is important for prehospital personnel to be educated about transient ischemic attacks (TIAs) because",
    options: [
      "Although the signs and symptoms disappear in a short period of time, they represent a risk for subsequent stroke",
      "The signs and symptoms may be attributed to another less significant cause and might not be transported with as much urgency",
      "Patients may refuse to be transported to a hospital so emergency medical services (EMS) needs to educate the patient about the risks of a TIA",
      "All of the above"
    ],
    answer: ["All of the above"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "49. A stroke patient is being transported from a Primary Stroke Center to a Comprehensive Stroke Center. IV tissue plasminogen activator (tPA) was administered prior to transferring and is continuing to infuse during the transport. The patient's blood pressure (BP) had been stable but suddenly increases to 190/90 with the tPA still infusing. What is the best action by the transport nurse?",
    options: [
      "Allow the tPA to continue infusing while continuing to monitor the BP",
      "Stop the tA and make note of the time, but take no further action",
      "Assess for change in neurological status and notify medical command",
      "None of the above"
    ],
    answer: ["Assess for change in neurological status and notify medical command"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "50. Because hypertension is a risk factor for hemorrhagic stroke, why would you not treat a blood pressure (BP) of 190/90 in an ischemic stroke patient in the emergency department (ED)?",
    options: [
      "Aggressive treatment can result in hypotension, which could threaten the penumbra",
      "Inability to secure an IV site",
      "Aggressive treatment could result in hypotension, which could trigger respiratory arrest",
      "Inability to secure consent for aggressive treatment"
    ],
    answer: ["Aggressive treatment can result in hypotension, which could threaten the penumbra"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "51. Your emergency department (ED) patient presented with onset 2 hours ago of right arm weakness and numbness, which continues. The patient's Jab work is normal and head CT is negative for any acute change. The most likely diagnosis is which of the following?",
    options: [
      "Peripheral neuropathy",
      "Carpal tunnel syndrome",
      "Acute ischemic stroke",
      "Transient ischemic attack (TIA)"
    ],
    answer: ["Acute ischemic stroke"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "52. Why are the southeastern states referred to as the Stroke Belt?",
    options: [
      "They have a higher incidence of stroke due to concentration of risk factors such as diabetes, hypertension, and smoking",
      "They have a higher percentage of older people, and stroke occurs most often in older people",
      "There is a critical shortage of primary care providers (PCP) in that area, so little primary prevention is accomplished",
      "That is where the first stroke care was organized in the mid 1990s"
    ],
    answer: ["They have a higher incidence of stroke due to concentration of risk factors such as diabetes, hypertension, and smoking"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "53, When assessing your emergency department (ED) patient, a change in Pupil reaction to light is considered a late sign of increasing intracranial pressure (ICP). Which is an early sign of increasing ICP?",
    options: [
      "Decline in consciousness",
      "Rising pulse oximetry reading",
      "Narrowing pulse pressure",
      "Decreased hearing"
    ],
    answer: ["Decline in consciousness"],
    multipleAnswer: false,
  },{
    chapter: "Hyperacute Stroke Care: Pre hospital and Emergency Departments",
    question: "54. You administered an as-needed dose of labetalol 10 mg IV to your stroke patient (blood pressure (BP| 208/108) and note the time to be 12:35 p.m. At 1:05 p.m., you find the patient to be drowsy and slow to respond; BP's 154/84, right where you want it to be. What is your next action?",
    options: [
      "Document the new BP, and continue on to the next patient",
      "Perform further neurologic assessment and notify provider of suspected hypoperfusion",
      "Perform further neurologic assessment and document that along with the BP",
      "Document the new BP and ask the patient care assistant to help you sit the patient up to help stimulate the patient"
    ],
    answer: ["Perform further neurologic assessment and notify provider of suspected hypoperfusion"],
    multipleAnswer: false,
  },{
    chapter: "Stroke Diagnosticss",
    question: "1. What is the only blood test you must have results of in order to safely administer IV tissue plasminogen activator (tPA)-besides international normalized ratio (INR), which is required for patients on Coumadin?",
    options: [
      "Liver enzymes",
      "Cardiac enzymes",
      "Creatinine to know if CT angiography is safe",
      "Blood sugar"
    ],
    answer: ["Blood sugar"],
    multipleAnswer: false,
  },{
    chapter: "Stroke Diagnosticss",
    question: "2. Patient X presents to the emergency department (ED) with right-sided weakness and speech difficulty at 10:00 a.m., reporting onset at 8:30 a.m. The CT was unremarkable. The wife says the only medication her husband takes is Coumadin. The international normalized ratio (INR) result is 1.9. What can you expect to do next?",
    options: [
      "Mix and administer tissue plasminogen activator (PA) according to the patient's actual weight",
      "Repeat the INR",
      "Continue to monitor vital signs and neurologic checks according to ED policy",
      "Prepare to discharge the patient from the ED"
    ],
    answer: ["Continue to monitor vital signs and neurologic checks according to ED policy"],
    multipleAnswer: false,
  },{
    chapter: "Stroke Diagnosticss",
    question: "3. Identify the main reason why a CT scan is the first imaging study done in acute stroke.",
    options: [
      "Most hospitals only have CT scan capability",
      "While not completely reliable, it is least expensive and the one insurance will cover",
      "There is less radiation involved than MRI",
      "CT is last and reliable in ruling out cerebral hemorrhage"
    ],
    answer: ["CT is last and reliable in ruling out cerebral hemorrhage"],
    multipleAnswer: false,
  },{
    chapter: "Stroke Diagnosticss",
    question: "4. The consulting neurologist recommends vascular imaging in order to determite if there is a large vessel occlusion. What test would you expect to see done next?",
    options: [
      "PET scan",
      "CT angiogram (CTA)",
      "MRI",
      "Transcranial Doppler (TCD)"
    ],
    answer: ["CT angiogram (CTA)"],
    multipleAnswer: false,
  },{
    chapter: "Stroke Diagnosticss",
    question: "5. Patient Y presents to your emergency department (ED) at 3:00 p.m. with left-sided weakness onset at 10:30 a.m. The CT software is out of service so a stat MRI/magnetic resonance angiography (MRA) package is done that shows a perfusion-diffusion mismatch. This indicates which of the following?",
    options: [
      "Presence of salvageable brain tissue, so thrombectomy should be considered",
      "Absence of salvageable brain tissue, so thrombectomy is not an option",
      "Technical error by imaging staff",
      "Presence of an uncommon cerebral anomaly"
    ],
    answer: ["Presence of salvageable brain tissue, so thrombectomy should be considered"],
    multipleAnswer: false,
  },{
    chapter: "Stroke Diagnosticss",
    question: "6. Why is an echocardiogram done during acute hospital stays?",
    options: [
      "The cause of up to 30% of stokes is cardiac related",
      "Itis only required on patients older than 80 years",
      "To rule out incidental cardiomyopathy",
      "All patients with stroke are at risk for cardiomy opathy within 10 year"
    ],
    answer: ["The cause of up to 30% of stokes is cardiac related"],
    multipleAnswer: false,
  },{
    chapter: "Stroke Diagnosticss",
    question: "7. Why would the neurologist order a transesophageal echocardiogram (TEE) ater the patient has already had a transthorace echocandiogram (TTE)?",
    options: [
      "Patient would not lie still for the TTE",
      "TEE offers superior visualization as there is no impedance from chest muscles or rib cage",
      "Latest guidelines recommend both be done for confirmed stroke patients",
      "The neurologist made a mistake and should be reminded that an echocardiogram was already done"
    ],
    answer: ["TEE offers superior visualization as there is no impedance from chest muscles or rib cage"],
    multipleAnswer: false,
  },{
    chapter: "Stroke Diagnosticss",
    question: "8. Your stroke patient has just been ordered to have a video fluoroscopic svallowing exam. What is the provider looking for?",
    options: [
      "A. Confirmation of successful bedside swallow screen",
      "B. Evaluation of swallowing function",
      "C. Evidence of aspiration",
      "D. Both B and C"
    ],
    answer: ["D. Both B and C"],
    multipleAnswer: false,
  },{
    chapter: "Stroke Diagnosticss",
    question: "9. What further diagnostic tool might be used for a patient with crypto-genic stroke prior to or shortly after discharge from the hospital?",
    options: [
      "Serial cardiac enzymes",
      "Genetic mapping",
      "Repeat CT in 1 month",
      "Implantable cardiac monitor to check for atrial fibrillation"
    ],
    answer: ["Implantable cardiac monitor to check for atrial fibrillation"],
    multipleAnswer: false,
  },{
    chapter: "Stroke Diagnosticss",
    question: "10. Your patient was told that she had a stroke at some time in the past, but she insists she has never had symptoms. How did her neurologist know this?",
    options: [
      "Presence of encephalomacia on CT scan",
      "Presence of positive Babinski's sign during neurologic exam",
      "Prolonged QT interval on 12-lead EKG",
      "Information from the spouse during history taking"
    ],
    answer: ["Presence of encephalomacia on CT scan"],
    multipleAnswer: false,
  },{
    chapter: "Stroke Diagnosticss",
    question: "11. A patient is brought to the emergency department (ED) by emergency medical services (EMS) with an original complaint of the worst headache of the patient's life, and is sleepy on arrival. You look to your ED colleague and say, 'T'll bet you it sa.ubarachnoid hemorrhage (SAH).' What diagnostic test would you expect to be ordered first?",
    options: [
      "Left middle cerebral artery (MCA) stroke",
      "Lacunar stroke in the right basal ganglia",
      "Complex migraine",
      "Subarachnoid hemorrhage"
    ],
    answer: ["Subarachnoid hemorrhage"],
    multipleAnswer: false,
  },{
    chapter: "Stroke Diagnosticss",
    question: "12. Your patient's CT is negative for blood and there is high suspicion fot subarachnoid hemorrhage (SAH). What other diagnostic test might you be told to set up for?",
    options: [
      "Lumbar puncture",
      "Repeat CT",
      "Blood cultures",
      "Caloric testing"
    ],
    answer: ["Lumbar puncture"],
    multipleAnswer: false,
  },{
    chapter: "Stroke Diagnosticss",
    question: "13. Which diagnostic tool has been proven to not only diagnose and monitor enhance IV tissue plasminogen activator (tPA) outcomes? vasospasm in subarachnoid hemorrhage (SAH) but also to predict and",
    options: [
      "EEG",
      "Diffusion-weighted MRI",
      "PET scan",
      "Transcranial Doppler (TCD)"
    ],
    answer: ["Transcranial Doppler (TCD)"],
    multipleAnswer: false,
  },{
    chapter: "Stroke Diagnosticss",
    question: "14. Your patient has just had a diagnostic cerebral angiography. What are the most common complications you will monitor over the next 24 hours?",
    options: [
      "Insertion site hematoma, stroke, and adverse reaction to contrast",
      "Insertion site hematoma, deep vein thrombosis (DVI), and adverse reaction to contrast dye",
      "Fever, headache, and insertion site hematoma",
      "Vessel wall tear, stroke, and DVT"
    ],
    answer: ["Insertion site hematoma, stroke, and adverse reaction to contrast"],
    multipleAnswer: false,
  },{
    chapter: "Stroke Diagnosticss",
    question: "15. The Brain Attack Coalition set separate standards for door-to-CT scan initiation and results. Which of the following is correct?",
    options: [
      "Door to CT in 35 minutes, results in 45 minutes",
      "Door to CT in 25 minutes, results in 45 minutes",
      "Door to CT in 10 minutes, results in 45 minutes",
      "No completion standard timeframe; just results within 60 minutes"
    ],
    answer: ["Door to CT in 25 minutes, results in 45 minutes"],
    multipleAnswer: false,
  },{
    chapter: "Stroke Diagnosticss",
    question: "16. You are a stroke unit nurse and your new stroke patient has arrived from the emergency department (ED) without having a carotid ultrasound done. You call the provider to order one stat. Which would be the correct response by the provider?",
    options: [
      "Get a carotid ultrasound done stat",
      "ACT angiogram was done that provided carotid imaging",
      "The patient has an allergy to contrast dye, so a carotid ultrasound cannot be done",
      "Carotid disease is so rare that it is not necessary to do carotid imaging in stroke patients"
    ],
    answer: ["ACT angiogram was done that provided carotid imaging"],
    multipleAnswer: false,
  },{
    chapter: "Stroke Diagnosticss",
    question: "17. More sensitive brain imaging bas contributed to the change in definiton of which of the following?",
    options: [
      "Cerebral edema",
      "Acute ischemic stroke",
      "Subarachnoid hemorrhage",
      "Transient ischemic attack (TIA)"
    ],
    answer: ["Transient ischemic attack (TIA)"],
    multipleAnswer: false,
  },{
    chapter: "Stroke Diagnosticss",
    question: "18. You are working on a stroke unit with an assignment of four patients today On which of them would you expect to see a hypercoagulable work-up?",
    options: [
      "An 80-year-old male with right basal ganglia stroke",
      "A 45-year-old female with subarachnoid hemorrhage (SAH)",
      "A 28-year-old male with right middle cerebral artery (MCA) stroke",
      "A 58-year-old female with lock-in syndrome"
    ],
    answer: ["A 28-year-old male with right middle cerebral artery (MCA) stroke"],
    multipleAnswer: false,
  },{
    chapter: "Stroke Diagnosticss",
    question: "19. Which of the following is true of CT imaging?",
    options: [
      "Bone and blood appear white and cerebrospinal fluid (CSE) appears black",
      "Substances with increased density appear darker, while substances of less density appear lighter",
      "It uses same radiologic technology as MRI imaging",
      "Subarachnoid hemorrhage (SAH) classically has a white diamond shape in the center of the brain"
    ],
    answer: ["Bone and blood appear white and cerebrospinal fluid (CSE) appears black"],
    multipleAnswer: false,
  },{
    chapter: "Stroke Diagnosticss",
    question: "20. Which of the following is the recommended initial imaging for suspected subarachnoid hemorrhage (SAH)?",
    options: [
      "MRI scan with contrast",
      "Cerebral angiography",
      "Noncontrast CT scan",
      "CT angiogram"
    ],
    answer: ["Noncontrast CT scan"],
    multipleAnswer: false,
  },{
    chapter: "Stroke Diagnosticss",
    question: "21. Early neurologic deterioration with a decrease in the Glasgow Coma Scale (GCS) score of 2 or more points is a hallmark of which type of stroke?",
    options: [
      "Spontaneous intracerebral hemorrhage (ICH)",
      "Infratentorial shift",
      "Vertebrobasilar syndrome",
      "Basal ganglia stroke"
    ],
    answer: ["Spontaneous intracerebral hemorrhage (ICH)"],
    multipleAnswer: false,
  },{
    chapter: "Stroke Diagnosticss",
    question: "22. The presence of a 'spot sign' on a CT angiogram (CTA) and contri ethanced CT likely indicates which of the following?",
    options: [
      "Accidental additional pathology",
      "Presence of contrast within a hematoma and increased risk of expansion",
      "Absence of contrast within a large vessel clot",
      "None of the above"
    ],
    answer: ["Presence of contrast within a hematoma and increased risk of expansion"],
    multipleAnswer: false,
  },{
    chapter: "Stroke Diagnosticss",
    question: "23. Which of the following are early CT imaging predictors of cerebral edema?",
    options: [
      "Frank hypodensity within the first 6 hours",
      "Involvement of one third or more of the middle cerebral artery (MCA) territory",
      "Early midline shift",
      "All of the above"
    ],
    answer: ["All of the above"],
    multipleAnswer: false,
  },{
    chapter: "Stroke Diagnosticss",
    question: "24. Transcranial Doppler (TCD) ultrasonography has proven to be useful in detecting intracranial vessel abnormalities. Which of the following air-cumstances will produce the most useful results?",
    options: [
      "Posterior circulation strokes",
      "Middle cerebral artery (MCA) strokes",
      "Patients with poor bony windows",
      "Moya Moya disease"
    ],
    answer: ["Middle cerebral artery (MCA) strokes"],
    multipleAnswer: false,
  },{
    chapter: "Stroke Diagnosticss",
    question: "25. In the hyperacute workup of acute ischemic stroke, what priority would you place on completion of a chest x-ray for most patients?",
    options: [
      "Immediately following noncontrast CT of brain",
      "Immediately following lab work, prior to EKG",
      "Following CT, lab work, and EKG",
      "Following lab work, prior to EKG"
    ],
    answer: ["Following CT, lab work, and EKG"],
    multipleAnswer: false,
  },{
    chapter: "Stroke Diagnosticss",
    question: "26. The emergency medical services (EMS) personnel report that a 70-year old male with new onset left-sided weakness is taking dabigatran, an effect of this medication? oral anticoagulant. Which blood test will be helpful in determining the",
    options: [
      "Prothrombin time (PT)/INR",
      "Partial thromboplastin time (PTT)",
      "Platelet count",
      "None of the above"
    ],
    answer: ["None of the above"],
    multipleAnswer: false,
  },{
    chapter: "Stroke Diagnosticss",
    question: "27. Dr. West, the stroke neurologist, mentions that a malignant middle cerebral artery (MCA) sign was noted on Mrs. Bender's CT. What did the neurologist see?",
    options: [
      "Malignant tumor in the area of the MCA territory causing mass effect",
      "Ischemic infarct involving more than 50% of the MCA territory with a midline shift",
      "Hemorrhagic infarct involving more than 30% of the MCA territory with a midline shift",
      "Vasospasm of the proximal MCA resulting in 50% reduced perfusion to territory"
    ],
    answer: ["Ischemic infarct involving more than 50% of the MCA territory with a midline shift"],
    multipleAnswer: false,
  },{
    chapter: "Stroke Diagnosticss",
    question: "28. When President Dwight D. Eisenhower had a stroke in 1957, his diagnosis was left middle cerebral artery (MCA) infarct. Which diagnostic test would have contributed to his stroke diagnosis?",
    options: [
      "Noncontrast CT",
      "MRI",
      "Echocardiogram",
      "None of the above"
    ],
    answer: ["None of the above"],
    multipleAnswer: false,
  },{
    chapter: "Stroke Diagnosticss",
    question: "29. A patient who had a cerebral angiogram this morning has become dia-phoretic and is complaining of lower abdominal pain and back pain. You suspect which of the following?",
    options: [
      "Arterial thrombosis with restricted perfusion pattern",
      "Muscle spasm from prolonged immobility",
      "Arterial dissection with retroperitoneal hemorrhage",
      "Unintentional migration of the closure device"
    ],
    answer: ["Arterial dissection with retroperitoneal hemorrhage"],
    multipleAnswer: false,
  },{
    chapter: "Stroke Diagnosticss",
    question: "30. Your patient is headed to radiology for a CT angiogram and you do a quick review of reported allergies knowing that the patient will be getting contrast. Which of the following allergies will you immediately report?",
    options: [
      "Shellfish",
      "Red dye #5",
      "Eggs",
      "Nickel alloy"
    ],
    answer: ["Shellfish"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - Neurological Assessment",
    question: "1. During National Institutes of Health Stroke Scale (NIHS) scoring, your patient has intact sensation when each side is stimulated individually, but is unaware of being touched on the left side when both sides are stimulated simultaneously. What condition is apparent?",
    options: [
      "Neuropathy",
      "Apraxia",
      "Extinction",
      "Paresthesia"
    ],
    answer: ["Extinction"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - Neurological Assessment",
    question: "2. Which is true of subarachnoid hemorrhage (SAH) scoring?",
    options: [
      "The Hunt and Hess score is based on symptoms, and the Fisher scale score is based on amount/location of blood",
      "The Hunt and Hess score is based on amount/location of blood, and the Fisher scale score is based on symptoms",
      "The World Federation of Neurological Surgeons (WFNS) score is based on amount/location of blood on CT",
      "The WENS score is based on age and symptoms"
    ],
    answer: ["The Hunt and Hess score is based on symptoms, and the Fisher scale score is based on amount/location of blood"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - Neurological Assessment",
    question: "3. The ABCD, score is used for which of the following situations?",
    options: [
      "Calculating risk of vasospasm in subarachnoid hemorrhage (SAH)",
      "Determining eligibility for acute rehabilitation admission",
      "Predicting short-term risk of stroke in patients with transient ischemic attack (TIA)",
      "Calculating appropriate antithrombotic dose in nonvalvular atrial fibrillation"
    ],
    answer: ["Predicting short-term risk of stroke in patients with transient ischemic attack (TIA)"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - Neurological Assessment",
    question: "4. The neurologist completes a neurologic exam and tells you that the patient has the four Ds with crossed findings. Where is the patient's stroke?",
    options: [
      "Tentorium",
      "Basal ganglia",
      "Midbrain",
      "Brainstem"
    ],
    answer: ["Brainstem"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - Neurological Assessment",
    question: "5, Which of the following correctly represents the loss of half of the field of view on the same side in both eyes?",
    options: [
      "Amaurosis fugax",
      "Bitemporal hemianopia",
      "Lateral hemianopia",
      "Homonymous hemianopia"
    ],
    answer: ["Homonymous hemianopia"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - Neurological Assessment",
    question: "6. When utilizing the Glasgow Coma Scale (GCS) to assess a stroke patient, which of the following is true?",
    options: [
      "It is the most widely studied coma scale with high reliability in the stroke population",
      "Like the National Institutes of Health Stroke Scale (NIHSS), a low score is indicative of less deficit",
      "A normal motor score is possible for patients with hemiparesis",
      "Intubated patients are automatically scored a 2 for verbal response"
    ],
    answer: ["A normal motor score is possible for patients with hemiparesis"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - Neurological Assessment",
    question: "7. Which cranial nerve (CN) is being assessed when you ask your patient to smile and raise his or her eyebrows?",
    options: [
      "CN III",
      "CN VII",
      "CN I",
      "CN XII"
    ],
    answer: ["CN VII"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - Neurological Assessment",
    question: "8. Which cranial nerve (CN) is being assessed when you ask your patient to follow your finger with his or her eyes as you move it laterally/side to side?",
    options: [
      "CN III",
      "CN II",
      "CN VI",
      "CN IV"
    ],
    answer: ["CN III"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - Neurological Assessment",
    question: "9. In the National Institutes of Health Stroke Scale (NIHSS) score of a right middle cerebral artery (MCA) ischemic stroke patient, the patient scored O for motor arm bilaterally, 4 for motor leg on the left side, and was unable to perform the limb ataxia test successfully on the left leg. The patient was able to do it successfully on the right (unaffected) side. What total score does the patient get for limb ataxia?",
    options: [
      "Present in both upper and lower limbs",
      "0-Absent",
      "1-Present in upper or lower limb",
      "Calculating NIHSS score does not apply to this patient"
    ],
    answer: ["0-Absent"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - Neurological Assessment",
    question: "10. The National Institutes of Health Stroke Scale (NIHSS) admission score has been proven valid as a predictor of discharge disposition. Which of the following is true of admission NIHSS scores?",
    options: [
      "Score 1 to 5: anticipate discharge to home",
      "Score 6 to 13: anticipate discharge to acute rehabilitation facility",
      "Score higher than 13: anticipate discharge to extended care facility",
      "All of the above"
    ],
    answer: ["All of the above"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - Neurological Assessment",
    question: "11. A patient with a preadmission modified Rankin Scale (mRS) score of 1 was",
    options: [
      "Independent in activities of daily living (ADL)",
      "Required some help, but was able to walk independently",
      "Required moderate assistance, and walked with walker",
      "Completely dependent for all ADL"
    ],
    answer: ["Independent in activities of daily living (ADL)"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - Neurological Assessment",
    question: "12 Which is true of the Barthel Index (BI) score?",
    options: [
      "It is a required functional score calculated daily by the bedside nurse",
      "The higher the score, the better the functional ability",
      "It has 100% correlative value with ischemic and hemorrhagic patients",
      "It is synonymous with FIM® score"
    ],
    answer: ["The higher the score, the better the functional ability"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - Neurological Assessment",
    question: "13. Which of the following is a late finding in the neurologic assessment of a stroke patient?",
    options: [
      "Headache",
      "Increased blood pressure (BP)",
      "Hippus response to light",
      "Decerebrate posturing"
    ],
    answer: ["Decerebrate posturing"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Intensive Care Unit",
    question: "1. Patients with subarachnoid hemorrhage (SAH) should be monitored tor which common complications of hemorrhagic stroke? Select all that are correct.",
    options: [
        "Hyperactivity",
        "Hydrocephalus",
        "Cerebral vasospasm",
        "Seizure activity"
    ],
    answer: [
      "Hydrocephalus",
      "Cerebral vasospasm",
      "Seizure activity"
    ],
    multipleAnswer: true,
  },{
    chapter: "Acute Care - In the Intensive Care Unit",
    question: "2. Your patient just returned from having endovascular embolization of an arteriovenous malformation (AVM). Your nursing care for the next hour will include which of the following?",
    options: [
      "Vital signs and neurologic checks q 15 minutes along with groin site checks",
      "Vital signs and neurologic checks q 15 minutes along with scalp incision checks",
      "Therapeutic hypothermia with goal of 35°C",
      "Education about the procedure and possible complications"
    ],
    answer: ["Vital signs and neurologic checks q 15 minutes along with groin site checks"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Intensive Care Unit",
    question: "3. Why is constipation prevented in the intensive care unit (ICU)?",
    options: [
      "A. Neurologic ICU patients are prone to constipation secondary to cerebral edema",
      "B. Patients with constipation are more likely to develop Sundowner's syndrome",
      "D. Both A and B",
      "C. Straining as a result of constipation causes blood pressure (BP) spikes"
    ],
    answer: ["C. Straining as a result of constipation causes blood pressure (BP) spikes"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Intensive Care Unit",
    question: "4. Hypoxia in the intensive care unit (ICU) may be indicative of what condition?",
    options: [
      "Aspiration pneumonia",
      "Hypoventilation",
      "Airway obstruction",
      "All of the above"
    ],
    answer: ["All of the above"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Intensive Care Unit",
    question: "5. Your intubated intracerebral hemorrhage patient is restless, despite seda-tion; the patient's blood pressure (BP) has risen to 176/90. What is your first action?",
    options: [
      "Assess the patient for respiratory distress or other causes of pain",
      "Increase the dose of sedative within parameters and monitor for response",
      "Tell the patient care assistant (PCA) to notify the nurse who is going to cover for you while you go to lunch",
      "Document the change in your notes so that if further deterioration occurs, there will be clear trending of events"
    ],
    answer: ["Assess the patient for respiratory distress or other causes of pain"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Intensive Care Unit",
    question: "6. You are orienting a new intensive care unit (ICU) nurse who asks you why a 69-year-old ischemic stroke patient with no history of diabetes needs to have every 4 hours glucose checks. Your best response would be which of the following?",
    options: [
      "I have no idea either, but it's ordered, so we do it.",
      "Hyperglycemia is common in ischemic stroke, even without a diabetes history, and can worsen outcomes if not controlled.",
      "Hypoglycemia can occur suddenly after ischemic stroke as a result of increased intracranial pressure, and can worsen outcomes if not controlled.",
      "Patients are known to deny a history of diabetes, so we test all our stroke patients."
    ],
    answer: ["Hyperglycemia is common in ischemic stroke, even without a diabetes history, and can worsen outcomes if not controlled."],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Intensive Care Unit",
    question: "7. Fever is common among stroke patients; what other complication should be anticipated for these patients as a result of fever?",
    options: [
      "Urinary tract infection",
      "Aspiration pneumonia",
      "Cerebral edema",
      "Hypervolemia"
    ],
    answer: ["Cerebral edema"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Intensive Care Unit",
    question: "8. While providing therapeutic cooling with an external cooling device, what condition will you be monitoring closely?",
    options: [
      "Constipation",
      "Shivering",
      "Cognitive decline",
      "None of the above"
    ],
    answer: ["Shivering"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Intensive Care Unit",
    question: "9. In the report from the emergency department (ED) nurse, you are told that your stroke patient passed the swallow screen and took baby aspirin orally, along with a cup of decaf coffee. In what circumstance might the swallow screen be repeated during this patient's hospital stay?",
    options: [
      "If there is no documentation of the swallow screen in the patient's medical record",
      "If there is a change in the National Institutes of Health Stroke Scale (NIHSS) score of 4 points or more, or clinical deterioration",
      "If the patient is noted to be drooling",
      "All of the above"
    ],
    answer: ["All of the above"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Intensive Care Unit",
    question: "10. You are caring for two ischemic stroke patients. Both had repeat imaging today. Patient A's was scheduled; patient B's was done as a result of new-onset headache and drowsiness. Both showed hemorrhagic transformar tion. Which of the following would most likely be true?",
    options: [
      "Patient A had petechial hemorrhage and patient B had parenchymal hemorrhage",
      "Patient A had parenchymal hemorrhage and patient B had petechial hemorrhage",
      "Both had intraventricular hemorrhage",
      "There is need for a second opinion on patient A's imaging as the patient was asymptomatic so could not have hemorrhagic transformation"
    ],
    answer: ["Patient A had petechial hemorrhage and patient B had parenchymal hemorrhage"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Intensive Care Unit",
    question: "11. What is the difference between cerebral salt wasting (CSW) and syne drome of inappropriate antidiuretic hormone (SIADH)?",
    options: [
      "There is no difference; CSW is the older term for SIADH",
      "CSW symptom is hyponatremia; SIADH symptom is hypernatremia",
      "CSW is often seen with subarachnoid hemorrhage (SAH) patients and SIADH is often seen with ischemic stroke patients",
      "CSW is treated with sodium replacement and SIADH is treated with fluid restriction"
    ],
    answer: ["CSW is treated with sodium replacement and SIADH is treated with fluid restriction"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Intensive Care Unit",
    question: "12. Which of the following is not true about nursing care in the intensive cane unit (ICU)?",
    options: [
      "Postendovascular clot retrieval patients require monitoring of groin site",
      "Temperature monitoring is essential to facilitate treatment to maintain normothermia",
      "Systolic blood pressure (SP) parameters for ischemic and intracere bral hemotrhage patients are 140 to 220 mmHg",
      "Average patient load is one to two patients per nurse"
    ],
    answer: ["Systolic blood pressure (SP) parameters for ischemic and intracere bral hemotrhage patients are 140 to 220 mmHg"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Intensive Care Unit",
    question: "13. Reperfusion syndrome is best described by which of the following?",
    options: [
      "Acute neurologic change after tissue plasminogen activator (tPA) infusion during second stroke event",
      "Ipsilateral headache or contralateral neurologic deficit after successful clot retrieval",
      "Acute onset hypotension following second pass of mechanical retrieval device",
      "Ipsilateral seizure following successful embolization of aneurysm"
    ],
    answer: ["Ipsilateral headache or contralateral neurologic deficit after successful clot retrieval"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Intensive Care Unit",
    question: "14. What is the landmark for leveling an external ventricular drainage (EVD) catheter in a supine patient?",
    options: [
      "Tip of the nose",
      "Clavicular notch",
      "Tragus of the ear",
      "Temporal window"
    ],
    answer: ["Tragus of the ear"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Intensive Care Unit",
    question: "15. A 58-year-old female patient was admitted yesterday with a small subarachnoid hemorrhage (SAH). Her medical history includes metabolic syndrome for which she was on a strict diet, having refused any other medical treatment. Her current vital signs are blood pressure (BP) 134/78, heart rate (HR) 86, respiratory rate (RR) 16, temperature 37°C, and pulse oxygen 88% on room air. What should be your next action?",
    options: [
      "Remove pulse oxygen sensor as she looks comfortable and vitals are stable",
      "Recheck pulse oxygen and notify provider for oxygen order",
      "Recheck pulse oxygen with next scheduled check of vital signs and neurologic status",
      "Confirm that the patient is not feeling short of breath and document"
    ],
    answer: ["Recheck pulse oxygen and notify provider for oxygen order"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Intensive Care Unit",
    question: "16. One of your patients is a married, 32-year-old mother of 10-year-old twins. She suffered a hemorrhagic stroke a week ago, and things are looking grim. The patient's sister refuses to accept the fact that she may not survive; her husband is saying that she would not have wanted live this way, and is frankly talking about whether he should discontinue. What is your role as a bedside nurse?",
    options: [
      "Avoid the topic each time either of them mentions it, as it is up to the",
      "Communicate the situation to the health care team and participate in social worker to deal with this",
      "Sit the sister down and get her to understand how unlikely recovery",
      "A family meeting is needed to discuss the situation",
      "None of the above"
    ],
    answer: ["Communicate the situation to the health care team and participate in social worker to deal with this"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Intensive Care Unit",
    question: "17. Most deaths following middle cerebral artery (MCA) occlusion in older patients occur during what time period?",
    options: [
      "During the first 24 hours",
      "3 to 4 days",
      "7 to 10 days",
      "30 to 60 days"
    ],
    answer: ["3 to 4 days"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Intensive Care Unit",
    question: "18. Mr. Poole, your patient in Room 408, is proving to be quite challenging to keep in bed. He is impulsive and does not seem to be aware of one side of his body. In what area did his stroke occur?",
    options: [
      "Left cerebellum",
      "Right basal ganglia",
      "Right parietal lobe",
      "Left temporal lobe"
    ],
    answer: ["Right parietal lobe"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Stroke Unit",
    question: "1. On Day 7 postcoiling, your aneurysmal subarachnoid hemorrhage 5ak. patient says she felis good enougy to go home and wonde why he dist tor said she has to stay another 3 to 4 davs. Your answer would be which of the following?",
    options: [
      " Her stroke education has not been completed yet",
      "She is at high risk of rebleed",
      "She is at high risk of vasospasm",
      "Her anticoagulant has not yet reached therapeutic level"
    ],
    answer: ["She is at high risk of vasospasm"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Stroke Unit",
    question: "2. Your patient with left hemisphere stroke complains of right arm pain and scores it as 3 of 10 on the pain scale. What would your next nursing action",
    options: [
      "Educate the patient that pain is a good sign that sensation is intact",
      "Notify the provider and anticipate repeat CT scan",
      "Document as new pain and include in report to next shift",
      "Reposition the patient, ensuring that the affected arm is well supported"
    ],
    answer: ["Reposition the patient, ensuring that the affected arm is well supported"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Stroke Unit",
    question: "3. Your new patient complains of headache and you have an order for acetaminophen PO. You are about to administer a dose when you remember that you were not told whether the patient had a dysphagia screen done in the emergency department (ED). Your next step is to which of the following?",
    options: [
      "Give the medication anyway because the patient seems alert and able to swallow okay",
      "Call the ED and leave a message for the nurse to call you back with the answer",
      "Perform the dysphagia screen now",
      "Apologize and explain that you will be back in a few minutes after you check the patient's chart"
    ],
    answer: ["Perform the dysphagia screen now"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Stroke Unit",
    question: "4. Ontounds, Dr. Hamilton, the stroke neurologist, is reviewing Mrs. Smith's medical record. It is Day 2 for this 72-year-old with a lacunar stroke. What would have made the provider quiz the patient about family history of diabetes?",
    options: [
      "Hgb A1C of 9%",
      "Fasting glucose of 122",
      "Small vessel disease on CT",
      "Remembering another current patient-same last name-with diabetes"
    ],
    answer: ["Hgb A1C of 9%"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Stroke Unit",
    question: "5. During rounds, your stroke patient begs Dr. Harms to let him have water, despite the thorough explanation you provided to the patient earlier that he failed the bedside swallow screen and the speech and language pathologist (SLP) will need to do a more thorough evaluation before he can have anything to drink. Dr. Harms states that as this patient can speak clearly and is alert, he must be able to swallow adequately. The provider orders the patient to have liquids as dela Your best response would be to:",
    options: [
      "Repeat the evidence-based dysphagia screen",
      "Accept that the provider is a doctor and in charge, so you get the patient some ice water",
      "Ignore the provider's order, and refuse to give the patient water",
      "Page the SLP stat to come and evaluate the patient"
    ],
    answer: ["Page the SLP stat to come and evaluate the patient"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Stroke Unit",
    question: "6. Postural (orthostatic) hypotension is considered when which of the following conditions is present?",
    options: [
      "A 10-mmhg drop in systolic blood pressure (SBP) after 2 hours of sit ting out of bed in a chair",
      "A 20-mmHg drop in SBP within 5 minutes of standing atter supine rest",
      "Hemorrhagic stroke-postural hypotension is not applicable to ise.emic stroke",
      "A 20-mmHg drop in SBP after initiation of new antihypertensine medication"
    ],
    answer: ["A 20-mmHg drop in SBP within 5 minutes of standing after supine rest"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Stroke Unit",
    question: "7. Which of the following is not a recommended treatment for prevention of venous thrombosis?",
    options: [
      "Low-molecular weight heparin",
      "Elastic compression stockings, also called thromboembolic disease (TED) stockings",
      "Intermittent pneumatic compression (IPC) devices, also called sequential compression devices (SCD)",
      "Heparinoids"
    ],
    answer: ["Elastic compression stockings, also called thromboembolic disease (TED) stockings"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Stroke Unit",
    question: "8. For which of the following conditions would you be most concern about complications with use of anticoagulation for deep venous thrombosis (DVT) prophylaxis?",
    options: [
      "Anterior cerebral artery ischemic stroke",
      "Secured aneurysmal subarachnoid hemorrhage (SAH)",
      "Basal ganglia ischemic stroke",
      "Subcortical intracerebral hemorrhage (ICH)"
    ],
    answer: ["Subcortical intracerebral hemorrhage (ICH)"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Stroke Unit",
    question: "9. Which nursing measure would best reduce the risk of urinary tract infection (UT) poststroke?",
    options: [
      "Encouragement of oral fluid intake",
      "Regular schedule of bladder elimination",
      "Administration of as-needed acetaminophen",
      "Close monitoring of intake and output"
    ],
    answer: ["Regular schedule of bladder elimination"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Stroke Unit",
    question: "10. Why are stroke patients at higher risk for urinary tract infection (UTI)?",
    options: [
      "High incidence of urinary incontinence and retention due to neuro-logic insult",
      "Poor hygiene associated with hemiparesis results in increased risk",
      "Intolerance of prophylactic antibiotics increases risk",
      "Inadequate bladder catheter care by neuroscience staff increases risk"
    ],
    answer: ["High incidence of urinary incontinence and retention due to neuro-logic insult"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Stroke Unit",
    question: "11. Nursing care for stroke patients includes ensuring that they are repositioned frequently. The reason that this is more critical for stroke patients than for other patients is that",
    options: [
      "In addition to neurologic damage with an infarct, there is also dermatologic damage resulting in increased susceptibility to skin breakdown",
      "There are regulatory requirements for reporting skin breakdown related to stroke that significantly impact reimbursements",
      "Due to motor and sensory deficits, stroke patients often cannot reposition themselves off pressure points or feel the pain associated with early skin breakdown",
      "Repositioning of stroke patients is not a nursing care priority"
    ],
    answer: ["Due to motor and sensory deficits, stroke patients often cannot reposition themselves off pressure points or feel the pain associated with early skin breakdown"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Stroke Unit",
    question: "12. In the report, you are told that Mr. Todd, a 58-year-old with a right middle cerebral artery (MCA) stroke is experiencing neglect. How will you incorporate this information into your nursing plan of care?",
    options: [
      "Turn bed around so that the patient's left side is facing the door",
      "Approach Mr. Todd from the right side",
      "Place a sign over the bed indicating that all activities are to be initiated from the left side",
      "Place the bedside table on the left side"
    ],
    answer: ["Approach Mr. Todd from the right side"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Stroke Unit",
    question: "13. Your patient's neurologist documented that the patient had a cryptogenic stroke. You are unfamiliar with this term and look it up. Which of the following is true about what you learned?",
    options: [
      "The patient has a familial tendency toward stroke from a distant relative",
      "The likelihood of death within 1 year is 80%",
      "The cause of the stroke is unknown despite a full workup",
      "The patient had no symptoms prior to the stroke"
    ],
    answer: ["The cause of the stroke is unknown despite a full workup"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Stroke Unit",
    question: "14. Which of the following examples illustrates aphasia?",
    options: [
      "A patient who refers to a fork as a ring, and a call bell as a muffin",
      "A patient whose speech is slurred and unintelligible",
      "A patient who cannot initiate a sentence, but can repeat commands after you",
      "A patient who refuses to speak"
    ],
    answer: ["A patient who refers to a fork as a ring, and a call bell as a muffin"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Stroke Unit",
    question: "15. Your ischemic patient had mechanical thrombectomy. The report states that the patient was recanalized. You know that this means",
    options: [
      "A second circulatory path was able to be established",
      "Blood flow was restored to the arterial occlusion site",
      "Their groin site was closed with the plug-style device",
      "Both groins were punctured so assessment of both sites is essential"
    ],
    answer: ["Blood flow was restored to the arterial occlusion site"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Stroke Unit",
    question: "16. Your ischemic patient was admitted from the emergency department (ED) to the stroke unit at 10:00 p.m. yesterday (Thursday, after recei ing IV tissue plasminogen activator (tPA) at 9:00 p.m. It is now Friday 9:00 p.m. and you know that for your patient to have the best outcome according to evidence-based guidelines, you need to accomplish whach of the following?",
    options: [
      "Documentation of vital signs and neurologic checks every 15 minutes until midnight",
      "Risk factor education prior to midnight",
      "Documentation of dysphagia screen prior to each medication administration",
      "Administration of aspirin between 9:00 p.m. and midnight"
    ],
    answer: ["Administration of aspirin between 9:00 p.m. and midnight"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Stroke Unit",
    question: "17. You recently attended the International Stroke Conference (ISC) and leamed about the different levels and classes of evidence and what they mean. You are preparing to do an in service for your colleagues. Which of the failowing is correct information to include?",
    options: [
      "A. 'Level' refers to the estimate of certainty based on size of population studied, and 'class' refers to the estimate of benefit versus risk",
      "B. Class 1, Level A recommendations have the highest likelihood of benefit",
      "C. Both A and B are correct",
      "D. The terms 'level' and 'class' both refer to the degree of expertise of the investigators"
    ],
    answer: ["C. Both A and B are correct"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Stroke Unit",
    question: "18. You receive a 50-year-old ischemic stroke patient from the neurologic intensive care unit (ICU) who is in a wheelchair and wearing a helmet. You know that the patient will wear the helmet at all times except for which situation?",
    options: [
      "During daily hygiene",
      "During occupational therapy",
      "During visiting hours",
      "At meal times"
    ],
    answer: ["During daily hygiene"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Stroke Unit",
    question: "19. Your 80-year-old patient and his family have just elected for do not resuscitate (DNR) status due to his diagnosis 6 months ago of metastatic lung cancer and now this ischemic stroke. Which of the following describes the changes to his care?",
    options: [
      "Cessation of daily lab work",
      "Reduction of frequency of vital signs and neurologic checks to once daily",
      "Cessation of therapy services",
      "None of the above"
    ],
    answer: ["None of the above"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Stroke Unit",
    question: "20. Right before lunch, the patient care assistant mentions that a patient coughed a lot while being fed breakfast. Your best next action would be which of the following?",
    options: [
      "Monitor the patient's temperature and breath sounds for the next 24 hours",
      "Repeat the swallow screen right away before any more medications or lunch",
      "Ask the patient if there are any other symptoms of a cold",
      "Remind the patient care assistant to have the patient tuck the chin with each swallow"
    ],
    answer: ["Repeat the swallow screen right away before any more medications or lunch"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Stroke Unit",
    question: "21. Your stroke patient's monitor shows atrial fibrillation. She says she feds fine and does not mind that rhythm so does not want any procedures ta treat it, and does not like blood thinners. What is your best response?",
    options: [
      "Explain that untreated atrial fibrillation results in extreme fatigue that inhibits rehabilitation",
      "Explain that untreated atrial fibrillation can deteriorate to ventricular fibrillation",
      "Explain that untreated atrial fibrillation puts the patient at risk for another stroke, and is likely the cause of this stroke",
      "Accept the patient's right to choose the treatment plan and document that choice"
    ],
    answer: ["Explain that untreated atrial fibrillation puts the patient at risk for another stroke, and is likely the cause of this stroke"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Stroke Unit",
    question: "22. In reviewing your patient's medical history, you note a risk factor for ischemic stroke. Which of the following did you see?",
    options: [
      "Factor V Leiden",
      "Thrombocytopenia",
      "Elevated creatinine",
      "Hypokalemia"
    ],
    answer: ["Factor V Leiden"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Stroke Unit",
    question: "23. In providing education to your transient ischemic attack (TIA) patient, which of the statements by the patient indicates that an understanding of the information?",
    options: [
      "TIAs are usually caused by small bleeds in the brain that resolve on their own.",
      "It is important to call 911 immediately if I experience these symptoms again because it could mean that I am having a stroke.",
      "Because TIAs don't cause permanent damage, I do not need to worry if I have another one.",
      "TIAs are usually caused by brief synaptic gaps in the brain during extreme physical activity."
    ],
    answer: ["It is important to call 911 immediately if I experience these symptoms again because it could mean that I am having a stroke."],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Stroke Unit",
    question: "24. The provider is reviewing the international normalized ratio (INR) results of a patient with a history of embolic stroke who is now on warfarin. Which of the following indicates a therapeutic value for this patient?",
    options: [
      "1.4",
      "4.5",
      "2.5",
      "0.5"
    ],
    answer: ["2.5"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Stroke Unit",
    question: "25. A 61-year-old female subarachnoid hemorrhagic patient is getting ready to be discharged to home. As you are reviewing instructions with her son for what to do if she develops stroke symptoms, which response indicates that he needs more teaching?",
    options: [
      "I should take her to the emergency room right away.",
      "I should note the time that the symptoms started.",
      "I should call 911 right away.",
      "I should make sure that I have her medication list."
    ],
    answer: ["I should take her to the emergency room right away."],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Stroke Unit",
    question: "26. Which of the following would be included in the discharge education of an ischemic stroke patient going home?",
    options: [
      "Make every effort to keep all follow-up appointments scheduled.",
      "Eat a diet low in saturated fat and high in sodium.",
      "Both A and B.",
      "Neither A nor B."
    ],
    answer: ["Make every effort to keep all follow-up appointments scheduled."],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Stroke Unit",
    question: "27. Your stroke patient has been found to have 85% right carotid stenosis and is scheduled for carotid endarterectomy tomorrow. Your patient asks if vision will return to normal postop. What is your best response?",
    options: [
      "Removal of the plaque sometimes results in reversal of symptoms",
      "Carotid endarterectomy is for prevention of another stroke; it will not change the damage done already from a stroke",
      "The patient will receive extensive vision therapy after surgery that will restore vision",
      "Excuse yourself and notify the provider that the patient is not back to baseline, so surgery will need to be delayed"
    ],
    answer: ["Carotid endarterectomy is for prevention of another stroke; it will not change the damage done already from a stroke"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Stroke Unit",
    question: "28. It is Day 3 for your left middle cerebral artery MCA) stroke patient. You observe the patient care assistant working with the patient. For which of the following would you need to intervene?",
    options: [
      "The patient care assistant assists the patient to ambulate to the bathroom and back to bed",
      "The patient care assistant assists the patient with a bath",
      "The patient care assistant sets up the patient's lunch tray and leaves the room",
      "The patient care assistant places the blood pressure cuff on the left arm"
    ],
    answer: ["The patient care assistant sets up the patient's lunch tray and leaves the room"],
    multipleAnswer: false,
  },{
    chapter: "Acute Care - In the Stroke Unit",
    question: "29. A small patent foramen ovale (PFO) is discovered on an ischemic stroke patient's echocardiography. Minimal right to left shunting is seen with the Valsalva maneuver. Which of the following is the most appropriate treatment for this patient?",
    options: [
      "Aspirin 325 mg/day",
      "Warfarin with a target international normalized ratio (INR) of 1.5 to 2.5",
      "Warfarin with a target INR of 1.5 to 2.5 and aspirin 81 mg/day",
      "Warfarin with a target INR of 1.5 to 2.5 and referral for PFO closure"
    ],
    answer: ["Aspirin 325 mg/day"],
    multipleAnswer: false,
  }
];
