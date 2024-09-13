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
        'Experiments with multiple configuration options are now cost-effective.',
        'Full-stack applications are possible without the need to invest in capital expenses.'
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
    },
    //chapter 3 Getting Support on AWS
    //32-52
    {
      question: "Your company is planning a major deployment on AWS. While the design and testing stages are still in progress, which of the following plans will provide the best blend of support and cost savings?",
      options: ["Basic", "Developer", "Business", "Enterprise"],
      answer: ["Business"],
      multipleAnswer: false
    },
    {
      question: "Your web development team is actively gearing up for a deployment of an ecommerce site. During these early stages of the process, individual developers are running into frustrating conflicts and configuration problems that are highly specific to your situation. Which of the following plans will provide the best blend of support and cost savings?",
      options: ["Basic", "Developer", "Business", "Enterprise"],
      answer: ["Developer"],
      multipleAnswer: false
    },
    {
      question: "Your corporate website was offline last week for more than two hours— which caused serious consequences, including the early retirement of your CTO. Your engineers have been having a lot of trouble tracking down the source of the outage and admit that they need outside help. Which of the following will most likely meet that need?",
      options: ["Basic", "Developer", "Business", "Enterprise"],
      answer: ["Enterprise"],
      multipleAnswer: false
    },
    {
      question: "For which of the following will AWS provide direct 24/7 support to all users— even those on the Basic Support plan?",
      options: [
        "Help with infrastructure under a massive denial-of-service (DoS) attack",
        "Help with failed and unavailable infrastructure",
        "Help with making a bill payment to AWS",
        "Help with accessing your infrastructure via the AWS CLI"
      ],
      answer: ["Help with making a bill payment to AWS"],
      multipleAnswer: false
    },
    {
      question: "The primary purpose of an AWS technical account manager is to:",
      options: [
        "Provide 24/7 customer service for your AWS account",
        "Provide deployment guidance and advocacy for Enterprise Support customers",
        "Provide deployment guidance and advocacy for Business Support customers",
        "Provide strategic cost estimates for Enterprise Support customers"
      ],
      answer: ["Provide deployment guidance and advocacy for Enterprise Support customers"],
      multipleAnswer: false
    },
    {
      question: "Your Linux-based EC2 instance requires a patch to a Linux kernel module. The problem is that patching the module will, for some reason, break the connection between your instance and data in an S3 bucket. Your team doesn't know if it's possible to work around this problem. Which is the most cost-effective AWS plan through which support professionals will try to help you?",
      options: ["Developer", "Business", "Enterprise", "No plan covers this kind of support"],
      answer: ["Business"],
      multipleAnswer: false
    },
    {
      question: "Your company enrolled in the Developer Support plan and, through the course of one month, consumed $4,000 USD of AWS services. How much will the support plan cost the company for the month?",
      options: ["$120", "$29", "$100", "$480"],
      answer: ["$120"],
      multipleAnswer: false
    },
    {
      question: "Your company enrolled in the Business Support plan and, through the course of three months, consumed $33,000 of AWS services (the consumption was equally divided across the months). How much will the support plan cost the company for the full three months?",
      options: ["$4,000", "$100", "$1,100", "$2,310"],
      answer: ["$2,310"],
      multipleAnswer: false
    },
    {
      question: "Which of the following AWS support services does not offer free documentation of some sort?",
      options: [
        "AWS Professional Services",
        "The Basic Support plan",
        "AWS Partner Network",
        "The Knowledge Center"
      ],
      answer: ["AWS Partner Network"],
      multipleAnswer: false
    },
    {
      question: "What is the key difference between the roles of AWS Professional Services and a technical account manager (TAM)?",
      options: [
        "The Professional Services product helps AWS Partner Network cloud professionals work alongside your own team to help you administrate your cloud infrastructure. The TAM is a cloud professional employed by AWS to guide you through the planning and execution of your infrastructure.",
        "The TAM is a cloud professional employed by AWS to guide you through the planning and execution of your infrastructure. The Professional Services product provides cloud professionals to work alongside your own team to help you administrate your cloud infrastructure.",
        "The TAM is a member of your team designated as the point person for all AWS projects. The Professional Services product provides consultants to work alongside your own team to help you administrate your cloud infrastructure.",
        "The Professional Services product is a network appliance that AWS installs in your data center to test cloud-bound workloads for compliance with best practices. The TAM is a cloud professional employed by AWS to guide you through the planning and execution of your infrastructure."
      ],
      answer: [
        "The Professional Services product helps AWS Partner Network cloud professionals work alongside your own team to help you administrate your cloud infrastructure. The TAM is a cloud professional employed by AWS to guide you through the planning and execution of your infrastructure."
      ],
      multipleAnswer: false
    },
    {
      question: "AWS documentation is available in a number of formats, including which of the following? (Select TWO.)",
      options: ["Microsoft Word (DOC)", "Kindle", "HTML", "DocBook"],
      answer: ["Kindle", "HTML"],
      multipleAnswer: true
    },
    {
      question: "Which of the following documentation sites are most likely to contain code snippets for you to cut and (after making sure you understand exactly what they'll do) paste into your AWS operations? (Select TWO.)",
      options: [
        "https://aws.amazon.com/premiumsupport/knowledge-center",
        "https://aws.amazon.com/premiumsupport/compare-plans",
        "https://docs.aws.amazon.com",
        "https://aws.amazon.com/professional-services"
      ],
      answer: [
        "https://aws.amazon.com/premiumsupport/knowledge-center",
        "https://docs.aws.amazon.com"
      ],
      multipleAnswer: true
    },
    {
      question: "What is the primary function of the content linked from the Knowledge Center?",
      options: [
        "To introduce new users to the functionality of the core AWS services",
        "To explain how AWS deployments can be more efficient and secure than on-premises",
        "To provide a public forum where AWS users can ask their technical questions",
        "To present solutions to commonly encountered technical problems using AWS Infrastructure"
      ],
      answer: ["To present solutions to commonly encountered technical problems using AWS Infrastructure"],
      multipleAnswer: false
    },
    {
      question: "On which of the following sites are you most likely to find information about encrypting your AWS resources?",
      options: [
        "https://aws.amazon.com/premiumsupport/knowledge-center",
        "https://aws.amazon.com/security/security-resources",
        "https://docs.aws.amazon.com",
        "https://aws.amazon.com/security/encryption"
      ],
      answer: ["https://aws.amazon.com/security/security-resources"],
      multipleAnswer: false
    },
    {
      question: "When using AWS documentation pages, what is the best way to be sure the information you're reading is up-to-date?",
      options: [
        "The page URL will include the word latest.",
        "The page URL will include the version number (i.e., 3.2).",
        "The page will have the word Current at the top right.",
        "There is no easy way to tell."
      ],
      answer: ["The page URL will include the word latest."],
      multipleAnswer: false
    },
    {
      question: "Which of the following is not a Trusted Advisor category?",
      options: ["Performance", "Service Limits", "Replication", "Fault Tolerance"],
      answer: ["Replication"],
      multipleAnswer: false
    },
    {
      question: "Data volumes that aren't properly backed up is an example of which of these Trusted Advisor categories?",
      options: ["Fault Tolerance", "Performance", "Security", "Cost Optimization"],
      answer: ["Fault Tolerance"],
      multipleAnswer: false
    },
    {
      question: "Instances that are running (mostly) idle should be identified by which of these Trusted Advisor categories?",
      options: ["Performance", "Cost Optimization", "Service Limits", "Replication"],
      answer: ["Cost Optimization"],
      multipleAnswer: false
    },
    {
      question: "Within the context of Trusted Advisor, what is a false positive?",
      options: [
        "An alert for a service state that was actually intentional",
        "A green OK icon for a service state that is failed or failing",
        "A single status icon indicating that your account is completely compliant",
        "Textual indication of a failed state"
      ],
      answer: ["An alert for a service state that was actually intentional"],
      multipleAnswer: false
    },
    {
      question: "Which of the following Trusted Advisor alerts is available only for accounts on the Business or Enterprise Support plan? (Select TWO.)",
      options: [
        "MFA on Root Account",
        "Load Balancer Optimization",
        "Service Limits",
        "IAM Access Key Rotation"
      ],
      answer: ["Load Balancer Optimization", "IAM Access Key Rotation"],
      multipleAnswer: true
    }
  ];

  constructor() { }

  getQuestions(): Question[] {
    return this.questions;
  }
}
