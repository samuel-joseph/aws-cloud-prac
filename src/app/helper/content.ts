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
  }
];
