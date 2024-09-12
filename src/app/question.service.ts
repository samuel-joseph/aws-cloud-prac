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
  //1-12
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
      question: 'Which of the following best describes Platform as a Service products?',
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
    },
    //13-32
    //chapter 2 Understanding you aws account
    {
      question: "Which of the following EC2 services can be used without charge under the Free Tier?",
      options: [
        "Any single EC2 instance type if it runs for less than one hour per day",
        "Any single EC2 instance type if it runs for less than 75 hours per month",
        "A single t2.micro EC2 instance type instance for 750 hours per month",
        "t2.micro EC2 instance type instances for a total of 750 hours per month"
      ],
      answer: ["t2.micro EC2 instance type instances for a total of 750 hours per month"],
      multipleAnswer: false
    },
    {
      question: "You want to experiment with deploying a web server on an EC2 instance. Which two of the following resources can you include to make that work while remaining within the Free Tier? (Select TWO.)",
      options: [
        "A 5 GB bucket on S3",
        "A t2.micro instance type EC2 instance",
        "A 30 GB solid-state Elastic Block Store (EBS) drive",
        "Two 20 GB solid-state Elastic Block Store (EBS) drives"
      ],
      answer: [
        "A t2.micro instance type EC2 instance",
        "A 30 GB solid-state Elastic Block Store (EBS) drive"
      ],
      multipleAnswer: true
    },
    {
      question: "Which of the following usage will always be cost-free even after your account's Free Tier has expired? (Select TWO.)",
      options: [
        "One million API calls/month on Amazon API Gateway",
        "10 GB of data retrievals from Amazon Glacier per month",
        "500 MB/month of free storage on the Amazon Elastic Container Registry (ECR)",
        "10 custom monitoring metrics and 10 alarms on Amazon Cloud Watch"
      ],
      answer: ["10 GB of data retrievals from Amazon Glacier per month", "10 custom monitoring metrics and 10 alarms on Amazon Cloud Watch"],
      multipleAnswer: true
    },
    {
      question: "Which of the following tools are available to ensure you won't accidentally run past your Free Tier limit and incur unwanted costs? (Select TWO.)",
      options: [
        "Automated email alerts when activity approaches the Free Tier limits",
        "The Top Free Tier Services by Usage section on the Billing & Cost Management Dashboard",
        "Billing & Cost Management section on the Top Free Tier Services Dashboard",
        "The Billing Preferences Dashboard"
      ],
      answer: ["Automated email alerts when activity approaches the Free Tier limits", "The Top Free Tier Services by Usage section on the Billing & Cost Management Dashboard"],
      multipleAnswer: true
    },
    {
      question: "Which of the following is likely to be an accurate source of AWS pricing information?",
      options: [
        "Wikipedia pages relating to a particular service",
        "The AWS Command Line Interface (AWS CLI)",
        "AWS online documentation relating to a particular service",
        "The AWS Total Cost of Ownership Calculator"
      ],
      answer: ["AWS online documentation relating to a particular service"],
      multipleAnswer: false
    },
    {
      question: "Which of the following will probably not affect the pricing for an AWS service?",
      options: [
        "Requests for raising the available service limit",
        "AWS Region",
        "The volume of data saved to an S3 bucket",
        "The volume of data egress from an Amazon Glacier vault"
      ],
      answer: ["Requests for raising the available service limit"],
      multipleAnswer: false
    },
    {
      question: "Which of the following is a limitation of the AWS Simple Monthly Calculator?",
      options: [
        "You can calculate resource use for only one service at a time.",
        "Not all AWS services are included.",
        "The pricing is seldom updated and doesn't accurately reflect current pricing.",
        "You're not able to specify specific configuration parameters."
      ],
      answer: ["Not all AWS services are included."],
      multipleAnswer: false
    },
    {
      question: "Which of the following Simple Monthly Calculator selections will likely have an impact on most other configuration choices on the page? (Select TWO.)",
      options: [
        "Calculate By Month Or Year",
        "Include Multiple Organizations",
        "Free Usage Tier",
        "Choose Region"
      ],
      answer: ["Free Usage Tier", "Choose Region"],
      multipleAnswer: true
    },
    {
      question: "Which of the following is not an included parameter in the AWS Total Cost of Ownership Calculator?",
      options: [
        "The tax implications of a cloud deployment",
        "Labor costs of an on-premises deployment",
        "Networking costs of an on-premises deployment",
        "Electricity costs of an on-premises deployment"
      ],
      answer: ["The tax implications of a cloud deployment"],
      multipleAnswer: false
    },
    {
      question: "Which of the following AWS Total Cost of Ownership Calculator parameters is likely to have the greatest impact on cost?",
      options: [
        "Currency",
        "AWS Region",
        "Guest OS",
        "Number of servers"
      ],
      answer: ["Number of servers"],
      multipleAnswer: false
    },
    {
      question: "Which of the following AWS documentation URLs points to the page containing an up-to-date list of service limits?",
      options: [
        "https://docs.aws.amazon.com/general/latest/gr/limits.html",
        "https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html",
        "https://aws.amazon.com/general/latest/gr/aws_service_limits.html",
        "https://docs.aws.amazon.com/latest/gr/aws_service_limits.html"
      ],
      answer: ["https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html"],
      multipleAnswer: false
    },
    {
      question: "Which of the following best describes one possible reason for AWS service limits?",
      options: [
        "To prevent individual customers from accidentally launching a crippling level of resource consumption",
        "To more equally distribute available resources between customers from different regions",
        "To allow customers to more gradually increase their deployments",
        "Because there are logical limits to the ability of AWS resources to scale upward"
      ],
      answer: ["To prevent individual customers from accidentally launching a crippling level of resource consumption"],
      multipleAnswer: false
    },
    {
      question: "Is it always possible to request service limit increases from AWS?",
      options: [
        "Yes. All service limits can be increased.",
        "No. A limit can never be increased.",
        "Service limits are defaults. They can be increased or decreased on demand.",
        "No. Some service limits are hard."
      ],
      answer: ["No. Some service limits are hard."],
      multipleAnswer: false
    },
    {
      question: "Which is the best place to get a quick summary of this month's spend for your account?",
      options: [
        "Budgets",
        "Cost Explorer",
        "Cost and usage reports",
        "Billing & Cost Management Dashboard"
      ],
      answer: ["Billing & Cost Management Dashboard"],
      multipleAnswer: false
    },
    {
      question: "What is the main goal for creating a Usage budget type (in AWS Budgets)?",
      options: [
        "To correlate usage per unit cost to understand your account cost efficiency",
        "To track the status of any active reserved instances on your account",
        "To track categories of resource consumption",
        "To monitor costs being incurred against your account"
      ],
      answer: ["To track categories of resource consumption"],
      multipleAnswer: false
    },
    {
      question: "Which of the following is not a setting you can configure in a Cost budget?",
      options: [
        "Period (monthly, quarterly, etc.)",
        "Instance type",
        "Start and stop dates",
        "Owner (username of resource owner)"
      ],
      answer: ["Owner (username of resource owner)"],
      multipleAnswer: false
    },
    {
      question: "What is the main difference between the goals of Cost Explorer and of cost and usage reports?",
      options: [
        "Cost Explorer displays visualizations of high-level historical and current account costs, while cost and usage reports generate granular usage reports in CSV format.",
        "Cost and usage reports display visualizations of high-level historical and current account costs, while Cost Explorer generates granular usage reports in CSV format.",
        "Cost Explorer lets you set alerts that are triggered by billing events, while cost and usage reports help you visualize system events.",
        "Cost and usage reports are meant to alert you to malicious intrusions, while Cost Explorer displays visualizations of high-level historical and current account costs."
      ],
      answer: ["Cost Explorer displays visualizations of high-level historical and current account costs, while cost and usage reports generate granular usage reports in CSV format."],
      multipleAnswer: false
    },
    {
      question: "What is the purpose of cost allocation tags?",
      options: [
        "To associate spend limits to automatically trigger resource shutdowns when necessary",
        "To help you identify the purpose and owner of a particular running resource to better understand and control deployments",
        "To help you identify resources for the purpose of tracking your account spending",
        "To visually associate account events with billing periods"
      ],
      answer: ["To help you identify resources for the purpose of tracking your account spending"],
      multipleAnswer: false
    },
    {
      question: "Which of the following scenarios would be a good use case for AWS Organizations? (Select TWO.)",
      options: [
        "A single company with multiple AWS accounts that wants a single place to administrate everything",
        "An organization that provides AWS access to large teams of its developers and admins",
        "A company that's integrated some operations with an upstream vendor",
        "A company with two distinct operational units, each with its own accounting system and AWS account"
      ],
      answer: ["A single company with multiple AWS accounts that wants a single place to administrate everything", "A company that's integrated some operations with an upstream vendor"],
      multipleAnswer: true
    },
    {
      question: "Which of these tools lets you design graphs within the browser interface to track your account spending?",
      options: [
        "Budgets",
        "Cost Explorer",
        "Reports",
        "Consolidating Billing"
      ],
      answer: ["Cost Explorer"],
      multipleAnswer: false
    }
    //chapter 3 Getting Support on AWS
  ];

  constructor() { }

  getQuestions(): Question[] {
    return this.questions;
  }
}
