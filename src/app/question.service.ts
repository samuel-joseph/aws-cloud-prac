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
    },
    //chapter 4
    {
      question: "Which of the following designations would refer to the AWS US West (Oregon) region?",
      options: ["us-east-1", "us-west-2", "us-west-2a", "us-west-2b"],
      answer: ["us-west-2"],
      multipleAnswer: false
    },
    {
      question: "Which of the following is an AWS Region for which customer access is restricted?",
      options: ["AWS Admin", "US-DOD", "Asia Pacific (Tokyo)", "AWS GovCloud"],
      answer: ["AWS GovCloud"],
      multipleAnswer: false
    },
    {
      question: "When you request a new virtual machine instance in EC2, your instance will automatically launch into the currently selected value of which of the following?",
      options: ["Service", "Subnet", "Availability Zone", "Region"],
      answer: ["Region"],
      multipleAnswer: false
    },
    {
      question: "Which of the following are not globally based AWS services? (Select TWO.)",
      options: ["RDS", "Route 53", "EC2", "CloudFront"],
      answer: ["RDS", "EC2"],
      multipleAnswer: true
    },
    {
      question: "Which of the following would be a valid endpoint your developers could use to access a particular Relational Database Service instance you're running in the Northern Virginia region?",
      options: ["us-east-1.amazonaws.com.rds", "ecs.eu-west-3.amazonaws.com", "rds.us-east-1.amazonaws.com", "rds.amazonaws.com.us-east-1"],
      answer: ["rds.us-east-1.amazonaws.com"],
      multipleAnswer: false
    },
    {
      question: "What are the most significant architectural benefits of the way AWS designed its regions? (Select TWO.)",
      options: [
        "It can make infrastructure more fault tolerant.",
        "It can make applications available to end users with lower latency.",
        "It can make applications more compliant with local regulations.",
        "It can bring down the price of running."],
      answer: [
        "It can make applications available to end users with lower latency.",
        "It can make applications more compliant with local regulations."
      ],
      multipleAnswer: true
    },
    {
      question: "Why is it that most AWS resources are tied to a single region?",
      options: ["Because those resources are run on a physical device, and that device must live somewhere", "Because security considerations are best served by restricting access to a single physical location", "Because access to any one digital resource must always occur through a single physical gateway", "Because spreading them too far afield would introduce latency issues"],
      answer: ["Because those resources are run on a physical device, and that device must live somewhere"],
      multipleAnswer: false
    },
    {
      question: "You want to improve the resilience of your EC2 web server. Which of the following is the most effective and efficient approach?",
      options: [
        "Launch parallel, load-balanced instances in multiple AWS Regions.",
        "Launch parallel, load-balanced instances in multiple Availability Zones within a single AWS Region.", "Launch parallel, autoscaled instances in multiple AWS Regions.", "Launch parallel, autoscaled instances in multiple Availability Zones within a single AWS Region."],
      answer: ["Launch parallel, load-balanced instances in multiple Availability Zones within a single AWS Region."],
      multipleAnswer: false
    },
    {
      question: "Which of the following is the most accurate description of an AWS Availability Zone?",
      options: ["One or more independently powered data centers running a wide range of hardware host types", "One or more independently powered data centers running a uniform hardware host type", "All the data centers located within a broad geographic area", "The infrastructure running within a single physical data center"],
      answer: ["One or more independently powered data centers running a wide range of hardware host types"],
      multipleAnswer: false
    },
    {
      question: "Which of the following most accurately describes a subnet within the AWS ecosystem?",
      options: [
        "The virtual limits imposed on the network access permitted to a resource instance",
        "The block of IP addresses assigned for use within a single region",
        "The block of IP addresses assigned for use within a single Availability Zone", "The networking hardware used within a single Availability Zone"],
      answer: ["The block of IP addresses assigned for use within a single Availability Zone"],
      multipleAnswer: false
    },
    {
      question: "What determines the order by which subnets/AZ options are displayed in EC2 configuration dialogs?",
      options: ["Alphabetical order", "They (appear) to be displayed in random order.", "Numerical order", "By order of capacity, with largest capacity first"],
      answer: ["They (appear) to be displayed in random order."],
      multipleAnswer: false
    },
    {
      question: "What is the primary goal of autoscaling?",
      options: ["To ensure the long-term reliability of a particular physical resource", "To ensure the long-term reliability of a particular virtual resource", "To orchestrate the use of multiple parallel resources to direct incoming user requests", "To ensure that a predefined service level is maintained regardless of external demand or instance failures"],
      answer: ["To ensure that a predefined service level is maintained regardless of external demand or instance failures"],
      multipleAnswer: false
    },
    {
      question: "Which of the following design strategies is most effective for maintaining the reliability of a cloud application?",
      options: ["Resource isolation", "Resource automation", "Resource redundancy", "Resource geolocation"],
      answer: ["Resource redundancy"],
      multipleAnswer: false
    },
    {
      question: "Which of the following AWS services are not likely to benefit from Amazon edge locations? (Select TWO.)",
      options: ["RDS", "EC2 load balancers", "Elastic Block Store (EBS)", "CloudFront"],
      answer: ["RDS", "Elastic Block Store (EBS)"],
      multipleAnswer: true
    },
    {
      question: "Which of the following is the primary benefit of using CloudFront distributions?",
      options: ["Automated protection from mass email campaigns", "Greater availability through redundancy", "Greater security through data encryption", "Reduced latency access to your content no matter where your end users live"],
      answer: ["Reduced latency access to your content no matter where your end users live"],
      multipleAnswer: false
    },
    {
      question: "What is the main purpose of Amazon Route 53?",
      options: ["Countering the threat of distributed denial-of-service (DDoS) attacks", "Managing domain name registration and traffic routing", "Protecting web applications from web-based threats", "Using the serverless power of Lambda to customize CloudFront behavior"],
      answer: ["Managing domain name registration and traffic routing"],
      multipleAnswer: false
    },
    {
      question: "According to the AWS Shared Responsibility Model, which of the following are responsibilities of AWS? (Select TWO.)",
      options: ["The security of the cloud", "Patching underlying virtualization software running in AWS data centers", "Security of what's in the cloud", "Patching OSs running on EC2 instances"],
      answer: ["The security of the cloud", "Patching underlying virtualization software running in AWS data centers"],
      multipleAnswer: true
    },
    {
      question: "According to the AWS Shared Responsibility Model, what's the best way to define the status of the software driving an AWS managed service?",
      options: [
        "Everything associated with an AWS managed service is the responsibility of AWS.",
        "Whatever is added by the customer (like application code) is the customer's responsibility.",
        "Whatever the customer can control (application code and/or configuration settings) is the customer's responsibility.",
        "Everything associated with an AWS managed service is the responsibility of the customer."
      ],
      answer: ["Whatever the customer can control (application code and/or configuration settings) is the customer's responsibility."],
      multipleAnswer: false
    },
    {
      question: "Which of the following is one of the first places you should look when troubleshooting a failing application?",
      options: ["AWS Acceptable Use Monitor", "Service Status Dashboard", "AWS Billing Dashboard", "Service Health Dashboard"],
      answer: ["Service Health Dashboard"],
      multipleAnswer: false
    },
    {
      question: "Where will you find information on the limits AWS imposes on the ways you can use your account resources?",
      options: ["AWS User Agreement Policy", "AWS Acceptable Use Policy", "AWS Acceptable Use Monitor", "AWS Acceptable Use Dashboard"],
      answer: ["AWS Acceptable Use Policy"],
      multipleAnswer: false
    },
    //chapter 5
    {
      question: "What is the primary function of the AWS IAM service?",
      options: [
        "Identity and access management",
        "Access key management",
        "SSH key pair management",
        "Federated access management"
      ],
      answer: ["Identity and access management"],
      multipleAnswer: false
    },
    {
      question: "Which of the following are requirements you can include in an IAM password policy? (Select THREE.)",
      options: [
        "Require at least one uppercase letter.",
        "Require at least one number.",
        "Require at least one space or null character.",
        "Require at least one nonalphanumeric character."
      ],
      answer: [
        "Require at least one uppercase letter.",
        "Require at least one number.",
        "Require at least one nonalphanumeric character."
      ],
      multipleAnswer: true
    },
    {
      question: "Which of the following should you do to secure your AWS root user? (Select TWO.)",
      options: [
        "Assign the root user to the 'admins' IAM group.",
        "Use the root user for day-to-day administration tasks.",
        "Enable MFA.",
        "Create a strong password."
      ],
      answer: ["Enable MFA.", "Create a strong password."],
      multipleAnswer: true
    },
    {
      question: "How does multi-factor authentication work?",
      options: [
        "Instead of an access password, users authenticate via a physical MFA device.",
        "In addition to an access password, users also authenticate via a physical MFA device.",
        "Users authenticate using tokens sent to at least two MFA devices.",
        "Users authenticate using a password and also either a physical or virtual MFA device."
      ],
      answer: ["Users authenticate using a password and also either a physical or virtual MFA device."],
      multipleAnswer: false
    },
    {
      question: "Which of the following SSH commands will successfully connect to an EC2 Amazon Linux instance with an IP address of 54.7.35.103 using a key named mykey.pem?",
      options: [
        'echo "mykey pem ubuntu@54.7.35.103" | ssh -i',
        "ssh -i mykey-pem ec2-user@54.7.35.103",
        "ssh -i mykey-pem@54.7.35.103",
        "ssh ec2-user@mykey.pem:54.7.35.103 -i"
      ],
      answer: ["ssh -i mykey-pem ec2-user@54.7.35.103"],
      multipleAnswer: false
    },
    {
      question: "What's the most efficient method for managing permissions for multiple IAM users?",
      options: [
        "Assign users requiring similar permissions to IAM roles.",
        "Assign users requiring similar permissions to IAM groups.",
        "Assign IAM users permissions common to others with similar administration responsibilities.",
        "Create roles based on IAM policies, and assign them to IAM users."
      ],
      answer: ["Assign users requiring similar permissions to IAM groups."],
      multipleAnswer: false
    },
    {
      question: "What is an IAM role?",
      options: [
        "A set of permissions allowing access to specified AWS resources",
        "A set of IAM users given permission to access specified AWS resources",
        "Permissions granted a trusted entity over specified AWS resources",
        "Permissions granted an IAM user over specified AWS resources"
      ],
      answer: ["Permissions granted a trusted entity over specified AWS resources"],
      multipleAnswer: false
    },
    {
      question: "How can federated identities be incorporated into AWS workflows? (Select TWO.)",
      options: [
        "You can provide users authenticated through a third-party identity provider access to backend resources used by your mobile app.",
        "You can use identities to guide your infrastructure design decisions.",
        "You can use authenticated identities to import external data (like email records from Gmail) into AWS databases.",
        "You can provide admins authenticated through AWS Microsoft AD with access to a Microsoft SharePoint farm running on AWS."
      ],
      answer: [
        "You can provide users authenticated through a third-party identity provider access to backend resources used by your mobile app.",
        "You can provide admins authenticated through AWS Microsoft AD with access to a Microsoft SharePoint farm running on AWS."
      ],
      multipleAnswer: true
    },
    {
      question: "Which of the following are valid third-party federated identity standards? (Select TWO.)",
      options: ["Secure Shell", "SSO", "SAML 2.0", "Active Directory"],
      answer: ["SAML 2.0", "Active Directory"],
      multipleAnswer: true
    },
    {
      question: "What information does the IAM credential report provide?",
      options: [
        "A record of API requests against your account resources",
        "A record of failed password account login attempts",
        "The current state of your account security settings",
        "The current state of security of your IAM users' access credentials"
      ],
      answer: ["The current state of security of your IAM users' access credentials"],
      multipleAnswer: false
    },
    {
      question: "What text format does the credential report use?",
      options: ["JSON", "CSV", "ASCI", "XML"],
      answer: ["CSV"],
      multipleAnswer: false
    },
    {
      question: "Which of the following IAM policies is the best choice for the admin user you create in order to replace the root user for day-to-day administration tasks?",
      options: [
        "AdministratorAccess",
        "AmazonS3FullAccess",
        "AmazonEC2FullAccess",
        "AdminAccess"
      ],
      answer: ["AdministratorAccess"],
      multipleAnswer: false
    },
    {
      question: "What will you need to provide for a new IAM user you're creating who will use 'programmatic access' to AWS resources?",
      options: [
        "A password",
        "A password and MFA",
        "An access key ID",
        "An access key ID and secret access key"
      ],
      answer: ["An access key ID and secret access key"],
      multipleAnswer: false
    },
    {
      question: "What will IAM users with AWS Management Console access need to successfully log in?",
      options: [
        "Their username, account_number, and a password",
        "Their username and password",
        "Their account number and secret access key",
        "Their username, password, and secret access key"
      ],
      answer: ["Their username and password"],
      multipleAnswer: false
    },
    {
      question: "Which of the following will encrypt your data while in transit between your office and Amazon S3?",
      options: ["DynamoDB", "SSE-S3", "A client-side master key", "SSE-KMS"],
      answer: ["A client-side master key"],
      multipleAnswer: false
    },
    {
      question: "Which of the following AWS resources cannot be encrypted using KMS?",
      options: ["Existing AWS Elastic Block Store volumes", "RDS databases", "S3 buckets", "DynamoDB databases"],
      answer: ["Existing AWS Elastic Block Store volumes"],
      multipleAnswer: false
    },
    {
      question: "What does KMS use to encrypt objects stored on your AWS account?",
      options: [
        "SSH master key",
        "KMS master key",
        "Client-side master key",
        "Customer master key"
      ],
      answer: ["Customer master key"],
      multipleAnswer: false
    },
    {
      question: "Which of the following standards governs AWS-based applications processing credit card transactions?",
      options: ["SSE-KMS", "FedRAMP", "PCI DSS", "ARPA"],
      answer: ["PCI DSS"],
      multipleAnswer: false
    },
    {
      question: "What is the purpose of the Service Organization Controls (SOC) reports found on AWS Artifact?",
      options: [
        "They can be used to help you design secure and reliable credit card transaction applications.",
        "They attest to AWS infrastructure compliance with data accountability standards like Sarbanes-Oxley.",
        "They guarantee that all AWS-based applications are, by default, compliant with Sarbanes-Oxley standards.",
        "They're an official, ongoing risk-assessment profiler for AWS-based deployments."
      ],
      answer: ["They attest to AWS infrastructure compliance with data accountability standards like Sarbanes-Oxley."],
      multipleAnswer: false
    },
    {
      question: "What role can the documents provided by AWS Artifact play in your application planning? (Select TWO.)",
      options: [
        "They can help you confirm that your deployment infrastructure is compliant with regulatory standards.",
        "They can provide insight into various regulatory and industry standards that represent best practices.",
        "They can provide insight into the networking and storage design patterns your AWS applications use.",
        "They represent AWS infrastructure design policy."
      ],
      answer: [
        "They can help you confirm that your deployment infrastructure is compliant with regulatory standards.",
        "They can provide insight into various regulatory and industry standards that represent best practices."
      ],
      multipleAnswer: true
    },
    //chapter 6
    {
      question: "Which of the following credentials can you use to log into the AWS Management Console?",
      options: [
        "Access key ID",
        "Account alias",
        "Account ID",
        "Identity and Access Management (IAM) username"
      ],
      answer: ["Identity and Access Management (IAM) username"],
      multipleAnswer: false
    },
    {
      question: "How long will your session with the AWS Management Console remain active?",
      options: ["6 hours", "12 hours", "8 hours", "24 hours", "15 minutes"],
      answer: ["12 hours"],
      multipleAnswer: false
    },
    {
      question: "While looking at the EC2 service console in the AWS Management Console while logged in as the root user, you notice all of your instances are missing. What could be the reason?",
      options: [
        "You've selected the wrong region in the navigation bar.",
        "You don't have view access.",
        "You've selected the wrong Availability Zone in the navigation bar.",
        "You don't have an access key."
      ],
      answer: ["You've selected the wrong region in the navigation bar."],
      multipleAnswer: false
    },
    {
      question: "Which of the following is true regarding a resource tag?",
      options: [
        "It must be unique within an account.",
        "It's case insensitive.",
        "It must have a key.",
        "It must have a value."
      ],
      answer: ["It must have a key."],
      multipleAnswer: false
    },
    {
      question: "Which of the following is required to use the AWS Command Line Interface (CLI)?",
      options: [
        "A secret key",
        "An IAM user",
        "Outbound network access to TCP port 80",
        "Linux"
      ],
      answer: ["A secret key"],
      multipleAnswer: false
    },
    {
      question: "Which of the following are options for installing the AWS CLI on Windows 10? (Select TWO.)",
      options: [
        "The MSI installer",
        "An AWS software development kit (SDK)",
        "The Yum or Aptitude package manager",
        "Using Python and pip"
      ],
      answer: ["The MSI installer", "Using Python and pip"],
      multipleAnswer: true
    },
    {
      question: "After installing the AWS Command Line Interface, what should you do before using it to securely manage your AWS resources?",
      options: [
        "Issue the aws --version command.",
        "Issue the aws configure command.",
        "Reboot.",
        "Generate a new access key ID and secret access key for the root user."
      ],
      answer: ["Issue the aws configure command."],
      multipleAnswer: false
    },
    {
      question: "Which output format does the AWS CLI support?",
      options: [
        "Tab-separated values (TSV)",
        "Comma-separated values (CSV)",
        "JavaScript object notation (JSON)",
        "None of these"
      ],
      answer: ["JavaScript object notation (JSON)"],
      multipleAnswer: false
    },
    {
      question: "Which of the following programming languages are AWS software development kits available for? (Select THREE.)",
      options: ["Fortran", "JavaScript", "JSON", "Java", "PHP"],
      answer: ["JavaScript", "Java", "PHP"],
      multipleAnswer: true
    },
    {
      question: "Which of the following software development kits (SDKs) enable developers to write mobile applications that run on both Apple and Android devices? (Select TWO.)",
      options: [
        "AWS Mobile SDK for Unity",
        "AWS Mobile SDK for .NET and Xamarin",
        "AWS SDK for Go",
        "AWS Mobile SDK for iOS"
      ],
      answer: ["AWS Mobile SDK for Unity", "AWS Mobile SDK for .NET and Xamarin"],
      multipleAnswer: true
    },
    {
      question: "Which of the following programming languages are AWS Internet of Things (IoT) device software development kits available for? (Select TWO.)",
      options: ["JavaScript", "C++", "Swift", "Ruby"],
      answer: ["JavaScript", "C++"],
      multipleAnswer: true
    },
    {
      question: "What's the difference between the AWS Command Line Interface (CLI) and the AWS software development kits (SDK)? (Select TWO.)",
      options: [
        "The AWS SDKs allow you to use popular programming languages to write applications that interact with AWS services.",
        "The AWS CLI allows you to interact with AWS services from a terminal.",
        "The AWS SDKs allow you to interact with AWS services from a terminal.",
        "The AWS CLI allows you to use popular programming languages to write applications that interact with AWS services."
      ],
      answer: [
        "The AWS SDKs allow you to use popular programming languages to write applications that interact with AWS services.",
        "The AWS CLI allows you to interact with AWS services from a terminal."
      ],
      multipleAnswer: true
    },
    {
      question: "Which of the following CloudWatch features store performance data from AWS services?",
      options: ["Logs", "Metrics", "Events", "Metric filters", "Alarms"],
      answer: ["Metrics"],
      multipleAnswer: false
    },
    {
      question: "For which of the following scenarios can you create a CloudWatch alarm to send a notification?",
      options: [
        "A metric that doesn't change for 24 hours",
        "Termination of an EC2 instance",
        "The presence of a specific IP address in a web server log",
        "A metric that exceeds a given threshold"
      ],
      answer: ["A metric that exceeds a given threshold"],
      multipleAnswer: false
    },
    {
      question: "Which of the following Simple Notification Service (SNS) protocols can you use to send a notification? (Select TWO.)",
      options: [
        "Short Message Service (SMS) text message",
        "CloudWatch Events",
        "Simple Queue Service (SQS)",
        "Mobile pull notification"
      ],
      answer: ["Short Message Service (SMS) text message", "Simple Queue Service (SQS)"],
      multipleAnswer: true
    },
    {
      question: "Which of the following are true regarding CloudWatch Events? (Select TWO.)",
      options: [
        "It can reboot an EC2 instance when an error appears in a log file.",
        "It can send an SNS notification when an EC2 instance's CPU utilization exceeds 90%.",
        "It can send an SNS notification when an IAM user logs in to the AWS Management Console.",
        "It can shut down an EC2 instance at a specific time."
      ],
      answer: [
        "It can send an SNS notification when an IAM user logs in to the AWS Management Console.",
        "It can shut down an EC2 instance at a specific time."
      ],
      multipleAnswer: true
    },
    {
      question: "Which of the following trigger an API action? (Select TWO.)",
      options: [
        "Configuring the AWS Command Line Interface (CLI)",
        "Viewing an S3 bucket from the AWS Management Console",
        "Logging into the AWS Management Console",
        "Listing IAM users from the AWS Command Line Interface (CLI)"
      ],
      answer: ["Viewing an S3 bucket from the AWS Management Console", "Listing IAM users from the AWS Command Line Interface (CLI)"],
      multipleAnswer: true
    },
    {
      question: "What's the most cost-effective way to view and search only the last 60 days of management API events on your AWS account?",
      options: [
        "Use CloudTrail event history.",
        "Create a trail.",
        "Stream CloudTrail logs to CloudWatch.",
        "Use CloudWatch Events."
      ],
      answer: ["Use CloudTrail event history."],
      multipleAnswer: false
    },
    {
      question: "You want to log every object downloaded from an S3 bucket in a specific region. You want to retain these logs indefinitely and search them easily. What's the most cost-effective way to do this? (Select TWO.)",
      options: [
        "Stream CloudTrail logs to CloudWatch Logs.",
        "Use CloudTrail event history.",
        "Enable CloudTrail logging of global service events.",
        "Create a trail to log S3 data events."
      ],
      answer: [
        "Stream CloudTrail logs to CloudWatch Logs.",
        "Create a trail to log S3 data events."
      ],
      multipleAnswer: true
    },
    {
      question: "What is a benefit of using CloudTrail log file integrity validation?",
      options: [
        "It lets you assert that no CloudTrail log files have been deleted from CloudWatch.",
        "It lets you assert that no CloudTrail log files have been deleted from S3.",
        "It prevents unauthorized users from deleting CloudTrail log files.",
        "It tells you how a CloudTrail log file has been tampered with."
      ],
      answer: ["It lets you assert that no CloudTrail log files have been deleted from S3."],
      multipleAnswer: false
    },
    {
      question: "Which of the following Cost Explorer report types can show you the monthly costs for your reserved EC2 instances?",
      options: [
        "Reserved instance recommendations",
        "Reserved Instances (RI) Coverage reports",
        "Reserved Instances (RI) Utilization reports",
        "Costs and usage reports"
      ],
      answer: ["Costs and usage reports"],
      multipleAnswer: false
    },
    {
      question: "Which of the following services allow you to purchase reserved instances to save money?",
      options: [
        "Amazon Relational Database Service (RDS)",
        "Lambda",
        "S3",
        "AWS Fargate"
      ],
      answer: ["Amazon Relational Database Service (RDS)"],
      multipleAnswer: false
    },
    {
      question: "Which Cost Explorer report shows the amount of money you've saved using reserved instances?",
      options: [
        "Daily costs",
        "Reservation Utilization",
        "Reservation Coverage",
        "Monthly EC2 running hours costs and usage"
      ],
      answer: ["Reservation Utilization"],
      multipleAnswer: false
    },
    {
      question: "You've been running several Elasticsearch instances continuously for the past three months. You check the reserved instance recommendations in Cost Explorer but see no recommendations. What could be a reason for this?",
      options: [
        "The recommendation parameters are based on the past seven days.",
        "You haven't selected the Elastic Compute Cloud (EC2) service.",
        "Cost Explorer doesn't make reservation recommendations for Elasticsearch.",
        "Your instances are already covered by reservations.",
        "You haven't selected the ElastiCache service."
      ],
      answer: ["Your instances are already covered by reservations."],
      multipleAnswer: false
    },
    //chapter 7
    {
      question: "What is the function of an EC2 AMI?",
      options: [
        "To define the hardware profile used by an EC2 instance",
        "To serve as an instance storage volume for high-volume data processing operations",
        "To define the way data streams are managed by EC2 instances",
        "To serve as a source image from which an instance's primary storage volume is built"
      ],
      answer: ["To serve as a source image from which an instance's primary storage volume is built"],
      multipleAnswer: false
    },
    {
      question: "Where can you find a wide range of verified AMIs from both AWS and third-party vendors?",
      options: [
        "AWS Marketplace",
        "Quick Start",
        "Community AMIs",
        "My AMIs"
      ],
      answer: ["AWS Marketplace"],
      multipleAnswer: false
    },
    {
      question: "Which of the following could be included in an EC2 AMI? (Select TWO.)",
      options: [
        "A networking configuration",
        "A software application stack",
        "An operating system",
        "An instance type definition"
      ],
      answer: ["A software application stack", "An operating system"],
      multipleAnswer: true
    },
    {
      question: "Which of the following are EC2 instance type families? (Select TWO.)",
      options: [
        "c5d.18xlarge",
        "Compute optimized",
        "t2.micro",
        "Accelerated computing"
      ],
      answer: ["Compute optimized", "Accelerated computing"],
      multipleAnswer: true
    },
    {
      question: "When describing EC2 instance types, what is the role played by the vCPU metric?",
      options: [
        "vCPUs represent an instance's potential resilience against external network demands.",
        "vCPUs represent an instance type's system memory compared to the class of memory modules on a physical machine.",
        "vCPUs represent an AMI's processing power compared to the number of processors on a physical machine.",
        "vCPUs represent an instance type's compute power compared to the number of processors on a physical machine."
      ],
      answer: ["vCPUs represent an instance type's compute power compared to the number of processors on a physical machine."],
      multipleAnswer: false
    },
    {
      question: "Which of the following describes an EC2 dedicated instance?",
      options: [
        "An EC2 instance running on a physical host reserved for the exclusive use of a single AWS account",
        "An EC2 instance running on a physical host reserved for and controlled by a single AWS account",
        "An EC2 AMI that can be launched only on an instance within a single AWS account.",
        "An EC2 instance optimized for a particular compute role"
      ],
      answer: ["An EC2 instance running on a physical host reserved for the exclusive use of a single AWS account"],
      multipleAnswer: false
    },
    {
      question: "Which of the following describes an EBS volume?",
      options: [
        "A software stack archive packaged to make it easy to copy and deploy to an EC2",
        "A virtualized partition of a physical storage drive that's directly connected to the EC2 instance it's associated with",
        "A virtualized partition of a physical storage drive that's not directly connected to the EC2 instance it's associated with",
        "A storage volume that's encrypted for greater security"
      ],
      answer: ["A virtualized partition of a physical storage drive that's directly connected to the EC2 instance it's associated with"],
      multipleAnswer: false
    },
    {
      question: "Why might you want to use an instance store volume with your EC2 instance rather than a volume from the more common EBS service? (Select TWO.)",
      options: [
        "Instance store volumes can be encrypted.",
        "Instance store volumes' data will survive an instance shutdown.",
        "Instance store volumes provide faster data read/write performance.",
        "Instance store volumes are connected directly to your EC2 instance."
      ],
      answer: [
        "Instance store volumes provide faster data read/write performance.",
        "Instance store volumes are connected directly to your EC2 instance."
      ],
      multipleAnswer: true
    },
    {
      question: "Your web application experiences periodic spikes in demand that require the provisioning of extra instances. Which of the following pricing models would make the most sense for those extra instances?",
      options: [
        "Spot",
        "On-demand",
        "Reserved",
        "Dedicated"
      ],
      answer: ["On-demand"],
      multipleAnswer: false
    },
    {
      question: "Your web application experiences periodic spikes in demand that require the provisioning of extra instances. Which of the following pricing models would make the most sense for the 'base' instances that will run constantly?",
      options: [
        "Spot",
        "On-demand",
        "Spot fleet",
        "Reserved"
      ],
      answer: ["Reserved"],
      multipleAnswer: false
    },
    {
      question: "Which of the following best describes what happens when you purchase an EC2 reserved instance?",
      options: [
        "Charges for any instances you run matching the reserved instance type will be covered",
        "Capacity matching the reserved definition will be guaranteed to be available whenever you request it.",
        "Your account will immediately and automatically be billed for the full reservation amount.",
        "An EC2 instance matching your reservation will automatically be launched in the selected AWS Region."
      ],
      answer: ["Charges for any instances you run matching the reserved instance type will be covered"],
      multipleAnswer: false
    },
    {
      question: "Which of the following use cases are good candidates for spot instances? (Select TWO.)",
      options: [
        "Big data processing workloads",
        "Ecommerce websites",
        "Continuous integration development environments",
        "Long-term, highly available, content-rich websites"
      ],
      answer: ["Big data processing workloads", "Continuous integration development environments"],
      multipleAnswer: true
    },
    {
      question: "Which AWS services simplify the process of bringing web applications to deployment? (Select TWO.)",
      options: [
        "Elastic Block Store",
        "Elastic Compute Cloud",
        "Elastic Beanstalk",
        "Lightsail"
      ],
      answer: ["Elastic Beanstalk", "Lightsail"],
      multipleAnswer: true
    },
    {
      question: "Which of the following services bills at a flat rate regardless of how it's consumed?",
      options: [
        "Lightsail",
        "Elastic Beanstalk",
        "Elastic Compute Cloud",
        "Relational Database Service"
      ],
      answer: ["Lightsail"],
      multipleAnswer: false
    },
    {
      question: "Which of these stacks are available from Lightsail blueprints? (Select TWO.)",
      options: [
        "Ubuntu",
        "Gitlab",
        "WordPress",
        "LAMP"
      ],
      answer: ["WordPress", "LAMP"],
      multipleAnswer: true
    },
    {
      question: "Which of these AWS services use primarily EC2 resources under the hood? (Select TWO.)",
      options: [
        "Elastic Block Store",
        "Lightsail",
        "Elastic Beanstalk",
        "Relational Database Service"
      ],
      answer: ["Lightsail", "Elastic Beanstalk"],
      multipleAnswer: true
    },
    {
      question: "Which of the following AWS services are designed to let you deploy Docker containers? (Select TWO.)",
      options: [
        "Elastic Container Service",
        "Lightsail",
        "Elastic Beanstalk",
        "Elastic Compute Cloud"
      ],
      answer: ["Elastic Container Service", "Elastic Beanstalk"],
      multipleAnswer: true
    },
    {
      question: "Which of the following use container technologies? (Select TWO.)",
      options: [
        "Docker",
        "Kubernetes",
        "Lambda",
        "Lightsail"
      ],
      answer: ["Docker", "Kubernetes"],
      multipleAnswer: true
    },
    {
      question: "What role can the Python programming language play in AWS Lambda?",
      options: [
        "Python cannot be used for Lambda.",
        "It is the primary language for API calls to administrate Lambda remotely.",
        "It is used as the underlying code driving the service.",
        "It can be set as the runtime environment for a function."
      ],
      answer: ["It can be set as the runtime environment for a function."],
      multipleAnswer: false
    },
    {
      question: "What is the maximum time a Lambda function may run before timing out?",
      options: [
        "15 minutes",
        "5 minutes",
        "1 minute",
        "1 hour"
      ],
      answer: ["15 minutes"],
      multipleAnswer: false
    }, 
    //chapter 8
    {
      question: "When trying to create an S3 bucket named documents, AWS informs you that the bucket name is already in use. What should you do in order to create a bucket?",
      options: [
        "Use a different region.",
        "Use a globally unique bucket name.",
        "Use a different storage class.",
        "Use a longer name.",
        "Use a shorter name."
      ],
      answer: ["Use a globally unique bucket name."],
      multipleAnswer: false
    },
    {
      question: "Which S3 storage classes are most cost-effective for infrequently accessed data that can't be easily replaced? (Select TWO.)",
      options: [
        "STANDARD_IA",
        "ONEZONE_IA",
        "GLACIER",
        "STANDARD",
        "INTELLIGENT TIERING"
      ],
      answer: ["STANDARD_IA", "GLACIER"],
      multipleAnswer: true
    },
    {
      question: "What are the major differences between Simple Storage Service (S3) and Elastic Block Store (EBS)? (Select TWO.)",
      options: [
        "EBS stores volumes.",
        "EBS stores snapshots.",
        "S3 stores volumes.",
        "S3 stores objects.",
        "EBS stores objects."
      ],
      answer: ["EBS stores volumes", "S3 stores objects"],
      multipleAnswer: true
    },
    {
      question: "Which tasks can S3 object lifecycle configurations perform automatically? (Select THREE.)",
      options: [
        "Deleting old object versions",
        "Moving objects to Glacier",
        "Deleting old buckets",
        "Deleting old objects",
        "Moving objects to an EBS volume"
      ],
      answer: ["Deleting old object versions", "Moving objects to Glacier", "Deleting old objects"],
      multipleAnswer: true
    },
    {
      question: "What methods can be used to grant anonymous access to an object in S3? (Select TWO.)",
      options: [
        "Bucket policies",
        "Access control lists",
        "User policies",
        "Security groups"
      ],
      answer: ["Bucket policies", "Access control lists"],
      multipleAnswer: true
    },
    {
      question: "Your budget-conscious organization has a 5 TB database file it needs to retain off-site for at least 5 years. In the event the organization needs to access the database, it must be accessible within 8 hours. Which cloud storage option should you recommend, and why? (Select TWO.)",
      options: [
        "S3 has the most durable storage.",
        "S3.",
        "S3 Glacier.",
        "Glacier is the most cost-effective.",
        "S3 has the fastest retrieval times.",
        "S3 doesn't support object sizes greater than 4 TB."
      ],
      answer: ["S3 Glacier", "Glacier is the most cost-effective."],
      multipleAnswer: true
    },
    {
      question: "Which of the following actions can you perform from the S3 Glacier service console?",
      options: [
        "Delete an archive",
        "Create a vault",
        "Create an archive",
        "Delete a bucket",
        "Retrieve an archive"
      ],
      answer: ["Create a vault"],
      multipleAnswer: false
    },
    {
      question: "Which Glacier retrieval option generally takes 3 to 5 hours to complete?",
      options: ["Provisioned", "Expedited", "Bulk", "Standard"],
      answer: ["Standard"],
      multipleAnswer: false
    },
    {
      question: "What's the minimum size for a Glacier archive?",
      options: ["1 byte", "40 TB", "5 TB", "0 bytes"],
      answer: ["1 byte"],
      multipleAnswer: false
    },
    {
      question: "Which types of AWS Storage Gateway let you connect your servers to block storage using the iSCSI protocol? (Select TWO.)",
      options: [
        "Cached gateway",
        "Tape gateway",
        "File gateway",
        "Volume gateway"
      ],
      answer: ["Tape gateway", "Volume gateway"],
      multipleAnswer: true
    },
    {
      question: "Where does AWS Storage Gateway primarily store data?",
      options: [
        "Glacier vaults",
        "S3 buckets",
        "EBS volumes",
        "EBS snapshots"
      ],
      answer: ["S3 buckets"],
      multipleAnswer: false
    },
    {
      question: "You need an easy way to transfer files from a server in your data center to S3 without having to install any third-party software. Which of the following services and storage protocols could you use? (Select FOUR.)",
      options: [
        "AWS Storage Gateway-file gateway",
        "iSCSI",
        "AWS Snowball",
        "SMB",
        "AWS Storage Gateway-volume gateway",
        "The AWS CLI"
      ],
      answer: [
        "AWS Storage Gateway-file gateway",
        "SMB",
        "AWS Storage Gateway-volume gateway",
        "The AWS CLI"
      ],
      multipleAnswer: true
    },
    {
      question: "Which of the following are true regarding the AWS Storage Gateway-volume gateway configuration? (Select THREE.)",
      options: [
        "Stored volumes asynchronously back up data to S3 as EBS snapshots.",
        "Stored volumes can be up to 32 TB in size.",
        "Cached volumes locally store only a frequently used subset of data.",
        "Cached volumes asynchronously back up data to S3 as EBS snapshots.",
        "Cached volumes can be up to 32 TB in size."
      ],
      answer: [
        "Stored volumes asynchronously back up data to S3 as EBS snapshots.",
        "Cached volumes locally store only a frequently used subset of data.",
        "Cached volumes can be up to 32 TB in size."
      ],
      multipleAnswer: true
    },
    {
      question: "What's the most data you can store on a single Snowball device?",
      options: ["42 TB", "50 TB", "72 TB", "80 TB"],
      answer: ["72 TB"],
      multipleAnswer: false
    },
    {
      question: "Which of the following are security features of AWS Snowball? (Select TWO.)",
      options: [
        "It enforces encryption at rest.",
        "It uses a Trusted Platform Module (TPM) chip.",
        "It enforces NFS encryption.",
        "It has tamper-resistant network ports."
      ],
      answer: ["It enforces encryption at rest.", "It uses a Trusted Platform Module (TPM) chip."],
      multipleAnswer: true
    },
    {
      question: "Which of the following might AWS do after receiving a damaged Snowball device from a customer?",
      options: [
        "Copy the customer's data to Glacier",
        "Replace the Trusted Platform Module (TPM) chip",
        "Securely erase the customer's data from the device",
        "Copy the customer's data to S3"
      ],
      answer: ["Securely erase the customer's data from the device"],
      multipleAnswer: false
    },
    {
      question: "Which of the following can you use to transfer data to AWS Snowball from a Windows machine without writing any code?",
      options: [
        "NFS",
        "The Snowball Client",
        "iSCSI",
        "SMB",
        "The S3 SDK Adapter for Snowball"
      ],
      answer: ["The Snowball Client"],
      multipleAnswer: false
    },
    {
      question: "How do the AWS Snowball and Snowball Edge devices differ? (Select TWO.)",
      options: [
        "Snowball Edge supports copying files using NFS.",
        "Snowball devices can be clustered together for storage.",
        "Snowball's QSFP+ network interface supports speeds up to 40 Gbps.",
        "Snowball Edge can run EC2 instances."
      ],
      answer: [
        "Snowball Edge supports copying files using NFS.",
        "Snowball Edge can run EC2 instances."
      ],
      multipleAnswer: true
    },
    {
      question: "Which of the following Snowball Edge device options is the best for running machine learning applications?",
      options: [
        "Compute Optimized",
        "Compute Optimized with GPU",
        "Storage Optimized",
        "Network Optimized"
      ],
      answer: ["Compute Optimized with GPU"],
      multipleAnswer: false
    },
    {
      question: "Which of the following hardware devices offers a network interface speed that supports up to 100 Gbps?",
      options: [
        "Snowball Edge with the Storage Optimized configuration",
        "Snowball Edge with the Compute Optimized configuration",
        "Storage Gateway",
        "80 TB Snowball"
      ],
      answer: ["Snowball Edge with the Compute Optimized configuration"],
      multipleAnswer: false
    },
    //chapter 9
    {
      question: "Which type of database stores data in columns and rows?",
      options: [
        "Nonrelational",
        "Relational",
        "Key-value store",
        "Document"
      ],
      answer: ["Relational"],
      multipleAnswer: false
    },
    {
      question: "Which of the following Structured Query Language (SQL) statements can you use to write data to a relational database table?",
      options: [
        "CREATE",
        "INSERT",
        "QUERY",
        "WRITE"
      ],
      answer: ["INSERT"],
      multipleAnswer: false
    },
    {
      question: "Which of the following statements is true regarding nonrelational databases?",
      options: [
        "You can create only one table.",
        "No primary key is required.",
        "You can't store data with a fixed structure.",
        "You don't have to define all the types of data that a table can store before adding data to it."
      ],
      answer: ["You don't have to define all the types of data that a table can store before adding data to it."],
      multipleAnswer: false
    },
    {
      question: "What is a no-SQL database?",
      options: [
        "A nonrelational database without primary keys",
        "A schemaless relational database",
        "A schemaless nonrelational database",
        "A relational database with primary keys"
      ],
      answer: ["A schemaless nonrelational database"],
      multipleAnswer: false
    },
    {
      question: "What do new Relational Database Service (RDS) instances use for database storage?",
      options: [
        "Instance volumes",
        "Elastic Block Store (EBS) volumes",
        "Snapshots",
        "Magnetic storage"
      ],
      answer: ["Elastic Block Store (EBS) volumes"],
      multipleAnswer: false
    },
    {
      question: "Which of the following are database engine options for Amazon Relational Database Service (RDS)? (Select TWO.)",
      options: [
        "IBM dBase",
        "PostgreSQL",
        "DynamoDB",
        "Amazon Aurora",
        "Redis"
      ],
      answer: ["PostgreSQL", "Amazon Aurora"],
      multipleAnswer: true
    },
    {
      question: "What two databases is Amazon Aurora compatible with? (Select TWO.)",
      options: [
        "MySQL",
        "PostgreSQL",
        "MariaDB",
        "Oracle",
        "Microsoft SQL Server"
      ],
      answer: ["MySQL", "PostgreSQL"],
      multipleAnswer: true
    },
    {
      question: "Which of the following features of Relational Database Service (RDS) can prevent data loss in the event of an Availability Zone failure? (Select TWO.)",
      options: [
        "Read replicas",
        "Multi-AZ",
        "Snapshots",
        "IOPS",
        "Vertical scaling"
      ],
      answer: ["Multi-AZ", "Snapshots"],
      multipleAnswer: true
    },
    {
      question: "Which RDS database engine offers automatically expanding database storage up to 64 TB?",
      options: [
        "Microsoft SQL Server",
        "Amazon Aurora",
        "Oracle",
        "Amazon Athena"
      ],
      answer: ["Amazon Aurora"],
      multipleAnswer: false
    },
    {
      question: "Which of the following Relational Database Service (RDS) features can help you achieve a monthly availability of 99.95 percent?",
      options: [
        "Multi-AZ",
        "Read replicas",
        "Point-in-time recovery",
        "Horizontal scaling"
      ],
      answer: ["Multi-AZ"],
      multipleAnswer: false
    },
    {
      question: "What is true regarding a DynamoDB partition? (Select TWO.)",
      options: [
        "It's stored within a table.",
        "It's backed by solid-state drives.",
        "It's a way to uniquely identify an item in a table.",
        "It's replicated across multiple Availability Zones."
      ],
      answer: ["It's backed by solid-state drives.", "It's replicated across multiple Availability Zones."],
      multipleAnswer: true
    },
    {
      question: "What is the minimum monthly availability for DynamoDB in a single region?",
      options: [
        "99.99 percent",
        "99.95 percent",
        "99.9 percent",
        "99.0 percent"
      ],
      answer: ["99.99 percent"],
      multipleAnswer: false
    },
    {
      question: "Which of the following statements is true regarding a DynamoDB table?",
      options: [
        "It can store only one data type.",
        "When you create a table, you must define the maximum number of items that it can store.",
        "Items in a table can have duplicate values for the primary key.",
        "Items in a table don't have to have all the same attributes."
      ],
      answer: ["Items in a table don't have to have all the same attributes."],
      multipleAnswer: false
    },
    {
      question: "Which configuration parameters can you adjust to improve write performance against a DynamoDB table? (Select TWO.)",
      options: [
        "Decrease read capacity units (RCU)",
        "Increase read capacity units",
        "Increase write capacity units (WCU)",
        "Decrease write capacity units",
        "Enable DynamoDB Auto Scaling"
      ],
      answer: ["Increase write capacity units (WCU)", "Enable DynamoDB Auto Scaling"],
      multipleAnswer: true
    },
    {
      question: "Which DynamoDB operation is the most read-intensive?",
      options: [
        "Write",
        "Query",
        "Scan query",
        "Update"
      ],
      answer: ["Scan query"],
      multipleAnswer: false
    },
    {
      question: "Which of the following would be appropriate to use for a primary key in a DynamoDB table that stores a customer list?",
      options: [
        "The customer's full name",
        "The customer's phone number",
        "The customer's city",
        "A randomly generated customer ID number"
      ],
      answer: ["A randomly generated customer ID number"],
      multipleAnswer: false
    },
    {
      question: "Which type of Redshift node uses magnetic storage?",
      options: [
        "Cost-optimized",
        "Dense compute",
        "Dense storage",
        "Dense memory"
      ],
      answer: ["Dense storage"],
      multipleAnswer: false
    },
    {
      question: "Which Redshift feature can analyze structured data stored in S3?",
      options: [
        "Redshift Spectrum",
        "Redshift S3",
        "Amazon Athena",
        "Amazon RDS"
      ],
      answer: ["Redshift Spectrum"],
      multipleAnswer: false
    },
    {
      question: "What is the term for a relational database that stores large amounts of structured data from a variety of sources for reporting and analysis?",
      options: [
        "Data storehouse",
        "Data warehouse",
        "Report cluster",
        "Dense storage node"
      ],
      answer: ["Data warehouse"],
      multipleAnswer: false
    },
    {
      question: "What's the maximum amount of data you can store in a Redshift cluster when using dense storage nodes?",
      options: [
        "2 PB",
        "326 TB",
        "2 TB",
        "326 PB",
        "236 TB"
      ],
      answer: ["2 PB"],
      multipleAnswer: false
    },
    //chapter 10
    {
      question: "Which of the following are true of a default VPC? (Select TWO.)",
      options: [
        "A default VPC spans multiple regions.",
        "AWS creates a default VPC in each region.",
        "AWS creates a default VPC in each Availability Zone.",
        "By default, each default VPC is available to one AWS account."
      ],
      answer: ["AWS creates a default VPC in each region.", "By default, each default VPC is available to one AWS account."],
      multipleAnswer: true
    },
    {
      question: "Which of the following is a valid CIDR for a VPC or subnet?",
      options: ["10.0.0.0/28", "10.0.0.0/29", "10.0.0.0/8", "10.0.0.0/15"],
      answer: ["10.0.0.0/28"],
      multipleAnswer: false
    },
    {
      question: "Which of the following are true regarding subnets? (Select TWO.)",
      options: [
        "A VPC must have at least two subnets.",
        "A subnet must have a CIDR that's a subset of the CIDR of the VPC in which it resides.",
        "A subnet spans one Availability Zone.",
        "A subnet spans multiple Availability Zones."
      ],
      answer: ["A subnet must have a CIDR that's a subset of the CIDR of the VPC in which it resides.", "A subnet spans one Availability Zone."],
      multipleAnswer: true
    },
    {
      question: "Which of the following is true of a new security group?",
      options: [
        "It contains an inbound rule denying access from public IP addresses.",
        "It contains an outbound rule denying access to public IP addresses.",
        "It contains an outbound rule allowing access to any IP address.",
        "It contains an inbound rule allowing access from any IP address.",
        "It contains an inbound rule denying access from any IP address."
      ],
      answer: ["It contains an outbound rule allowing access to any IP address."],
      multipleAnswer: false
    },
    {
      question: "What's the difference between a security group and a network access control list (NACL)? (Select TWO.)",
      options: [
        "A network access control list operates at the instance level.",
        "A security group operates at the instance level.",
        "A security group operates at the subnet level.",
        "A network access control list operates at the subnet level."
      ],
      answer: ["A security group operates at the instance level.", "A network access control list operates at the subnet level."],
      multipleAnswer: true
    },
    {
      question: "Which of the following is true of a VPC peering connection?",
      options: [
        "It's a private connection that connects more than three VPCs.",
        "It's a private connection between two VPCs.",
        "It's a public connection between two VPCs.",
        "It's a virtual private network (VPN) connection between two VPCs."
      ],
      answer: ["It's a private connection between two VPCs."],
      multipleAnswer: false
    },
    {
      question: "What are two differences between a virtual private network (VPN) connection and a Direct Connect connection? (Select TWO.)",
      options: [
        "A Direct Connect connection offers predictable latency because it doesn't traverse the internet.",
        "A VPN connection uses the internet for transport.",
        "A Direct Connect connection uses AES 128- or 256-bit encryption.",
        "A VPN connection requires proprietary hardware."
      ],
      answer: ["A Direct Connect connection offers predictable latency because it doesn't traverse the internet.", "A VPN connection uses the internet for transport."],
      multipleAnswer: true
    },
    {
      question: "Which of the following are true about registering a domain name with Route 53? (Select TWO.)",
      options: [
        "The registrar you use to register a domain name determines who will host DNS for that domain.",
        "You can register a domain name for a term of up to 10 years.",
        "Route 53 creates a private hosted zone for the domain.",
        "Route 53 creates a public hosted zone for the domain."
      ],
      answer: ["You can register a domain name for a term of up to 10 years.", "Route 53 creates a public hosted zone for the domain."],
      multipleAnswer: true
    },
    {
      question: "Which of the following Route 53 routing policies can return a set of randomly ordered values?",
      options: ["Simple", "Multivalue Answer", "Failover", "Latency"],
      answer: ["Multivalue Answer"],
      multipleAnswer: false
    },
    {
      question: "Which of the following Route 53 routing policies doesn't use health checks?",
      options: ["Latency", "Multivalue Answer", "Simple", "Geolocation"],
      answer: ["Simple"],
      multipleAnswer: false
    },
    {
      question: "Which of the following types of Route 53 health checks works by making a test connection to a TCP port?",
      options: ["Simple", "CloudWatch alarm", "Endpoint", "Calculated"],
      answer: ["Endpoint"],
      multipleAnswer: false
    },
    {
      question: "You have two EC2 instances hosting a web application. You want to distribute 20 percent of traffic to one instance and 80 percent to the other. Which of the following Route 53 routing policies should you use?",
      options: ["Weighted", "Failover", "Multivalue Answer", "Simple"],
      answer: ["Weighted"],
      multipleAnswer: false
    },
    {
      question: "Resources in a VPC need to be able to resolve internal IP addresses for other resources in the VPC. No one outside of the VPC should be able to resolve these addresses. Which of the following Route 53 resources can help you achieve this?",
      options: [
        "A public hosted zone",
        "A private hosted zone",
        "Domain name registration",
        "Health checks"
      ],
      answer: ["A private hosted zone"],
      multipleAnswer: false
    },
    {
      question: "You want to provide private name resolution for two VPCs using the domain name company.pri. How many private hosted zones do you need to create?",
      options: ["1", "2", "3", "4"],
      answer: ["1"],
      multipleAnswer: false
    },
    {
      question: "On how many continents are CloudFront edge locations distributed?",
      options: ["7", "6", "5", "4"],
      answer: ["6"],
      multipleAnswer: false
    },
    {
      question: "From where does CloudFront retrieve content to store for caching?",
      options: ["Regions", "Origins", "Distributions", "Edge locations"],
      answer: ["Origins"],
      multipleAnswer: false
    },
    {
      question: "Which CloudFront distribution type requires you to provide a media player?",
      options: ["Streaming", "RTMP", "Web", "Edge"],
      answer: ["RTMP"],
      multipleAnswer: false
    },
    {
      question: "You need to deliver content to users in the United States and Canada. Which of the following edge location options will be the most cost-effective for your CloudFront distribution?",
      options: [
        "United States, Canada, and Europe",
        "United States, Canada, Europe, and Asia",
        "United States, Canada, Europe, Asia, and Africa",
        "All edge locations"
      ],
      answer: ["United States, Canada, and Europe"],
      multipleAnswer: false
    },
    {
      question: "Approximately how many different CloudFront edge locations are there?",
      options: [
        "About 50",
        "More than 150",
        "More than 300",
        "More than 500"
      ],
      answer: ["More than 150"],
      multipleAnswer: false
    },
    {
      question: "Which of the following are valid origins for a CloudFront distribution? (Select TWO.)",
      options: [
        "EC2 instance",
        "A public S3 bucket",
        "A private S3 bucket that you don't have access to",
        "A private S3 bucket that you own"
      ],
      answer: ["EC2 instance", "A public S3 bucket"],
      multipleAnswer: true
    },
    //chapter 11
    {
      question: "Which of the following is an advantage of using CloudFormation?",
      options: [
        "It uses the popular Python programming language.",
        "It prevents unauthorized manual changes to resources.",
        "It lets you create multiple separate AWS environments using a single template.",
        "It can create resources outside of AWS."
      ],
      answer: ["It lets you create multiple separate AWS environments using a single template."],
      multipleAnswer: false
    },
    {
      question: "What formats do CloudFormation templates support? (Select TWO.)",
      options: ["XML", "YAML", "HTML", "JSON"],
      answer: ["YAML", "JSON"],
      multipleAnswer: true
    },
    {
      question: "What's an advantage of using parameters in a CloudFormation template?",
      options: [
        "Allow customizing a stack without changing the template.",
        "Prevent unauthorized users from using a template.",
        "Prevent stack updates.",
        "Allow multiple stacks to be created from the same template."
      ],
      answer: ["Allow customizing a stack without changing the template."],
      multipleAnswer: false
    },
    {
      question: "Why would you use CloudFormation to automatically create resources for a development environment instead of creating them using AWS CLI commands? (Select TWO.)",
      options: [
        "Resources CloudFormation creates are organized into stacks and can be managed as a single unit.",
        "CloudFormation stack updates help ensure that changes to one resource won't break another.",
        "Resources created by CloudFormation always work as expected.",
        "CloudFormation can provision resources faster than the AWS CLI."
      ],
      answer: [
        "Resources CloudFormation creates are organized into stacks and can be managed as a single unit.",
        "CloudFormation stack updates help ensure that changes to one resource won't break another."
      ],
      multipleAnswer: true
    },
    {
      question: "What are two features of CodeCommit? (Select TWO.)",
      options: [
        "Versioning",
        "Automatic deployment",
        "Differencing",
        "Manual deployment"
      ],
      answer: ["Versioning", "Differencing"],
      multipleAnswer: true
    },
    {
      question: "In the context of CodeCommit, what can differencing accomplish?",
      options: [
        "Allowing reverting to an older version of a file",
        "Understanding what code change introduced a bug",
        "Deleting duplicate lines of code",
        "Seeing when an application was last deployed"
      ],
      answer: ["Understanding what code change introduced a bug"],
      multipleAnswer: false
    },
    {
      question: "What software development practice regularly tests new code for bugs but doesn't do anything else?",
      options: [
        "Differencing",
        "Continuous deployment",
        "Continuous delivery",
        "Continuous integration"
      ],
      answer: ["Continuous integration"],
      multipleAnswer: false
    },
    {
      question: "Which CodeBuild build environment compute types support Windows operating systems? (Select TWO.)",
      options: [
        "build.general2.large",
        "build.general.medium",
        "build.general1.small",
        "build.general1.large",
        "build.windows1.small"
      ],
      answer: ["build.general2.large", "build.windows1.small"],
      multipleAnswer: true
    },
    {
      question: "What does a CodeBuild environment always contain? (Select TWO.)",
      options: [
        "An operating system",
        "A Docker image",
        "The Python programming language",
        ".NET Core",
        "The PHP programming language"
      ],
      answer: ["An operating system", "A Docker image"],
      multipleAnswer: true
    },
    {
      question: "Which of the following can CodeDeploy do? (Select THREE.)",
      options: [
        "Deploy an application to an on-premises Windows instance.",
        "Deploy a Docker container to the Elastic Container Service.",
        "Upgrade an application on an EC2 instance running Red Hat Enterprise Linux.",
        "Deploy an application to an Android smartphone.",
        "Deploy a website to an S3 bucket."
      ],
      answer: [
        "Deploy an application to an on-premises Windows instance.",
        "Deploy a Docker container to the Elastic Container Service.",
        "Upgrade an application on an EC2 instance running Red Hat Enterprise Linux."
      ],
      multipleAnswer: true
    },
    {
      question: "What is the minimum number of actions in a CodePipeline pipeline?",
      options: ["1", "2", "3", "4", "0"],
      answer: ["2"],
      multipleAnswer: false
    },
    {
      question: "You want to predefine the configuration of EC2 instances that you plan to launch manually and using Auto Scaling. What resource must you use?",
      options: [
        "CloudFormation template",
        "Instance role",
        "Launch configuration",
        "Launch template"
      ],
      answer: ["Launch template"],
      multipleAnswer: false
    },
    {
      question: "What Auto Scaling group parameters set the limit for the number of instances that Auto Scaling creates? (Select TWO.)",
      options: [
        "Maximum",
        "Group size",
        "Desired capacity",
        "Minimum"
      ],
      answer: ["Maximum", "Minimum"],
      multipleAnswer: true
    },
    {
      question: "An Auto Scaling group has a desired capacity of 7 and a maximum size of 7. What will Auto Scaling do if someone manually terminates one of these instances?",
      options: [
        "It will not launch any new instances.",
        "It will launch one new instance.",
        "It will terminate one instance.",
        "It will change the desired capacity to 6."
      ],
      answer: ["It will launch one new instance."],
      multipleAnswer: false
    },
    {
      question: "What Auto Scaling feature creates a scaling schedule based on past usage patterns?",
      options: [
        "Predictive scaling",
        "Scheduled scaling",
        "Dynamic scaling",
        "Pattern scaling"
      ],
      answer: ["Predictive scaling"],
      multipleAnswer: false
    },
    {
      question: "What type of AWS Systems Manager document can run Bash or PowerShell scripts on an EC2 instance?",
      options: [
        "Run document",
        "Command document",
        "Automation document",
        "Script document"
      ],
      answer: ["Command document"],
      multipleAnswer: false
    },
    {
      question: "What type of AWS Systems Manager document can take a snapshot of an EC2 instance?",
      options: [
        "Command document",
        "Run document",
        "Script document",
        "Automation document"
      ],
      answer: ["Automation document"],
      multipleAnswer: false
    },
    {
      question: "Which of the following OpsWorks services uses Chef recipes?",
      options: [
        "AWS OpsWorks for Puppet Enterprise",
        "AWS OpsWorks Stacks",
        "AWS OpsWorks Layers",
        "AWS OpsWorks for Automation"
      ],
      answer: ["AWS OpsWorks Stacks"],
      multipleAnswer: false
    },
    {
      question: "What configuration management platforms does OpsWorks support? (Select TWO.)",
      options: [
        "SaltStack",
        "Puppet Enterprise",
        "CFEngine",
        "Chef",
        "Ansible"
      ],
      answer: ["Puppet Enterprise", "Chef"],
      multipleAnswer: true
    },
    {
      question: "Which of the following OpsWorks Stacks layers contains at least one EC2 instance?",
      options: [
        "EC2 Auto Scaling layer",
        "Elastic Container Service (ECS) cluster layer",
        "OpsWorks layer",
        "Relational Database Service (RDS) layer",
        "Elastic Load Balancing (ELB) layer"
      ],
      answer: ["OpsWorks layer"],
      multipleAnswer: false
    }
  ];

  constructor() { }

  getQuestions(): Question[] {
    return this.questions;
  }
}
