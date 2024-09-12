import { Injectable } from '@angular/core';

export interface Question {
  question: string;
  options: string[];
  answer: string[];
  multipleAnswer: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questions: Question[] = [
  //chapter 1: the cloud
    {
      question: 'Which of the following does not contribute significantly to the operational value of a late cloud provider like AWS??',
      options: [
        'Multiregional presence',
        'Highly experienced teams of security engineers',
        'Deep experience in the retail sphere',
        'Metered, pay-per-use pricing'
        ],
      answer: ['Deep experience in the retail sphere'],
      multipleAnswer: false
    },
    {
      question: 'Which of the following are signs of a highly available application? (Select TWO.)',
      options: [
        'A failure in one geographic region will trigger an automatic failover to resources in a different region.',
        'Applications are protected behind multiple layers of security.',
        'Virtualized hypervisor driven systems are deployed as mandated by company policy.',
        'Spikes in user demand are met through automatically increasing resources.'
      ],
      answer: [
        'A failure in one geographic region will trigger an automatic failover to resources in a different region.',
        'Spikes in user demand are met through automatically increasing resources.'
      ],
      multipleAnswer: true
    },
    {
      question: 'How does the metered payment model make many benefits of cloud computing possible? (Select TWO.)',
      options: [
        'Greater application security is now possible.',
        'Experiments with multiple configuration options are now cost-effective.',
        'Applications are now highly scalable.',
        'Full-stack applications are possible without the need to invest in capital expenses.'
      ],
      answer: [
        'Greater application security is now possible.',
        'Experiments with multiple configuration options are now cost-effective.'
      ],
      multipleAnswer: true
    },
    {
      question: 'Which of the following are direct benefits of server virtualization? (Select TWO.)',
      options: [
        'Fast resource provisioning and launching',
        'Efficient (high-density) use of resources',
        'Greater application security',
        'Elastic application designs'
      ],
      answer: [
        'Fast resource provisioning and launching',
        'Efficient (high-density) use of resources'
      ],
      multipleAnswer: true
    },
    {
      question: 'What is a hypervisor?',
      options: [
        'Hardware device used to provide an interface between storage and compute modules',
        'Hardware device used to provide an interface between networking and compute',
        'Software used to log and monitor virtualized operations',
        'Software used to administrate virtualized resources run on physical infrastructure'
      ],
      answer: ['Software used to administrate virtualized resources run on physical infrastructure'],
      multipleAnswer: false
    },
    {
      question: 'Which of the following best describes server virtualization?',
      options: [
        '"Sharding" data from multiple sources into a single virtual data store',
        'Logically partitioning physical compute and storage devices into multiple smaller virtual devices',
        'Aggregating physical resources spread over multiple physical devices into a single virtual device',
        'Abstracting the complexity of physical infrastructure behind a simple web interface'
      ],
      answer: ['Logically partitioning physical compute and storage devices into multiple smaller virtual devices'],
      multipleAnswer: false
    },
    {
      question: 'Which of the following best describes Infrastructure as a Service products?',
      options: [
        'Services that hide infrastructure complexity behind a simple interface',
        'Services that provide a service to end users through a public network',
        'Services that give you direct control over underlying compute and storage resources',
        'Platforms that allow developers to run their code over short periods on cloud servers'
      ],
      answer: ['Services that give you direct control over underlying compute and storage resources'],
      multipleAnswer: false
    },
    {
      question: '8. Which of the following best describes Platform as a Service products?',
      options: [
        'Services that hide infrastructure complexity behind a simple interface',
        'Platforms that allow developers to run their code over short periods on cloud servers',
        'Services that give you direct control over underlying compute and storage resources',
        'Services that provide a service to end users through a public network'
      ],
      answer: ['Services that hide infrastructure complexity behind a simple interface'],
      multipleAnswer: false
    },
    {
      question: 'Which of the following best describes Software as a Service products?',
      options: [
        'Services that give you direct control over underlying compute and storage resources', 
        'Services that provide a service to end users through a public network',
        'Services that hide infrastructure complexity behind a simple interface',
        'Platforms that allow developers to run their code over short periods on cloud servers'
      ],
      answer: ['Services that provide a service to end users through a public network'],
      multipleAnswer: false
    },
    {
      question: 'Which of the following best describes scalability?',
      options: [
        'The ability of an application to automatically add preconfigured compute resources to meet increasing demand',
        'The ability of an application to increase or decrease compute resources to match changing demand',
        'The ability to more densely pack virtualized resources onto a single physical server',
        'The ability to bill resource usage using a pay-per-user model'
      ],
      answer: ['The ability of an application to automatically add preconfigured compute resources to meet increasing demand'],
      multipleAnswer: false
    },
    {
      question: 'Which of the following best describes elasticity?',
      options: [
        'The ability to more densely pack virtualized resources onto a single physical server',
        'The ability to bill resource usage using a pay-per-user model',
        'The ability of an application to increase or decrease compute resources to match changing demand',
        'The ability of an application to automatically add preconfigured compute resources to meet increasing demand'
      ],
      answer: ['The ability of an application to increase or decrease compute resources to match changing demand'],
      multipleAnswer: false
    },
    {
      question: 'Which of the following characteristics most help AWS provide such scalable services? (Select TWO.)',
      options: [
        'The enormous number of servers it operates',
        'The value of its capitalized assets',
        'Its geographic reach',
        'Its highly automated infrastructure administration systems'
      ],
      answer: [
        'The enormous number of servers it operates',
        'Its highly automated infrastructure administration systems'
      ],
      multipleAnswer: true
    }
  ];

  constructor() { }

  getQuestions(): Question[] {
    return this.questions;
  }
}
