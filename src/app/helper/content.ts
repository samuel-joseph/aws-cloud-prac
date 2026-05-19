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
];
