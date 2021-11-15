const posts = [
    {
        alt: "Veterans Day",
        link:"https://www.linkedin.com/company/lso-inc",
        image:"https://media-exp1.licdn.com/dms/image/C5622AQGLm6Bw-AVpVA/feedshare-shrink_800/0/1636657622626?e=1639612800&v=beta&t=2bfC9k_-pcut1gPi8l4uNNdMsm_wYPZoM5uxOajnBTg",
        key: 1
    },
    {
        alt: "ISO 11607",
        link:"https://lso-inc.com/blog/iso-11607-answering-manufacturers-most-common-questions/",
        image:"https://lso-inc.com/wp-content/uploads/2021/09/11607_blog_feat-scaled.jpg",
        key: 2
    },
    {
        alt: "medical device sterilization",
        link:"https://lso-inc.com/blog/3-often-overlooked-elements-of-medical-device-sterilization/",
        image:"https://media-exp1.licdn.com/dms/image/C5622AQFKpzftQfNtcw/feedshare-shrink_1280/0/1636568942104?e=1639612800&v=beta&t=4FGi62wfLMpjhLDpT_xxeywWd9QA33dwMgnrGnoqML8",
        key: 3
    },
    {
        alt: "3 Keys to More Efficient Distribution Simulation Testing",
        link:"https://lso-inc.com/blog/3-keys-to-more-efficient-distribution-simulation-testing/",
        image:"https://media-exp1.licdn.com/dms/image/C5622AQHgUH4Y5I7AKw/feedshare-shrink_1280/0/1635271793676?e=1639612800&v=beta&t=zcF6DgsK6x9Pns_k8GruZQEcZ2flRQQHhLBGZ5pjxrU",
        key: 4
    }, // test post items
    {
        alt: "Veterans Day",
        link:"https://www.linkedin.com/company/lso-inc",
        image:"https://media-exp1.licdn.com/dms/image/C5622AQGLm6Bw-AVpVA/feedshare-shrink_800/0/1636657622626?e=1639612800&v=beta&t=2bfC9k_-pcut1gPi8l4uNNdMsm_wYPZoM5uxOajnBTg",
        key: 1
    },
    {
        alt: "ISO 11607",
        link:"https://lso-inc.com/blog/iso-11607-answering-manufacturers-most-common-questions/",
        image:"https://lso-inc.com/wp-content/uploads/2021/09/11607_blog_feat-scaled.jpg",
        key: 2
    },
    {
        alt: "medical device sterilization",
        link:"https://lso-inc.com/blog/3-often-overlooked-elements-of-medical-device-sterilization/",
        image:"https://media-exp1.licdn.com/dms/image/C5622AQFKpzftQfNtcw/feedshare-shrink_1280/0/1636568942104?e=1639612800&v=beta&t=4FGi62wfLMpjhLDpT_xxeywWd9QA33dwMgnrGnoqML8",
        key: 3
    },
    {
        alt: "3 Keys to More Efficient Distribution Simulation Testing",
        link:"https://lso-inc.com/blog/3-keys-to-more-efficient-distribution-simulation-testing/",
        image:"https://media-exp1.licdn.com/dms/image/C5622AQHgUH4Y5I7AKw/feedshare-shrink_1280/0/1635271793676?e=1639612800&v=beta&t=zcF6DgsK6x9Pns_k8GruZQEcZ2flRQQHhLBGZ5pjxrU",
        key: 4
    },
    {
        alt: "Veterans Day",
        link:"https://www.linkedin.com/company/lso-inc",
        image:"https://media-exp1.licdn.com/dms/image/C5622AQGLm6Bw-AVpVA/feedshare-shrink_800/0/1636657622626?e=1639612800&v=beta&t=2bfC9k_-pcut1gPi8l4uNNdMsm_wYPZoM5uxOajnBTg",
        key: 1
    },
    {
        alt: "ISO 11607",
        link:"https://lso-inc.com/blog/iso-11607-answering-manufacturers-most-common-questions/",
        image:"https://lso-inc.com/wp-content/uploads/2021/09/11607_blog_feat-scaled.jpg",
        key: 2
    },
    {
        alt: "medical device sterilization",
        link:"https://lso-inc.com/blog/3-often-overlooked-elements-of-medical-device-sterilization/",
        image:"https://media-exp1.licdn.com/dms/image/C5622AQFKpzftQfNtcw/feedshare-shrink_1280/0/1636568942104?e=1639612800&v=beta&t=4FGi62wfLMpjhLDpT_xxeywWd9QA33dwMgnrGnoqML8",
        key: 3
    },
    {
        alt: "3 Keys to More Efficient Distribution Simulation Testing",
        link:"https://lso-inc.com/blog/3-keys-to-more-efficient-distribution-simulation-testing/",
        image:"https://media-exp1.licdn.com/dms/image/C5622AQHgUH4Y5I7AKw/feedshare-shrink_1280/0/1635271793676?e=1639612800&v=beta&t=zcF6DgsK6x9Pns_k8GruZQEcZ2flRQQHhLBGZ5pjxrU",
        key: 4
    },
    {
        alt: "Veterans Day",
        link:"https://www.linkedin.com/company/lso-inc",
        image:"https://media-exp1.licdn.com/dms/image/C5622AQGLm6Bw-AVpVA/feedshare-shrink_800/0/1636657622626?e=1639612800&v=beta&t=2bfC9k_-pcut1gPi8l4uNNdMsm_wYPZoM5uxOajnBTg",
        key: 1
    },
    {
        alt: "ISO 11607",
        link:"https://lso-inc.com/blog/iso-11607-answering-manufacturers-most-common-questions/",
        image:"https://lso-inc.com/wp-content/uploads/2021/09/11607_blog_feat-scaled.jpg",
        key: 2
    },
    {
        alt: "medical device sterilization",
        link:"https://lso-inc.com/blog/3-often-overlooked-elements-of-medical-device-sterilization/",
        image:"https://media-exp1.licdn.com/dms/image/C5622AQFKpzftQfNtcw/feedshare-shrink_1280/0/1636568942104?e=1639612800&v=beta&t=4FGi62wfLMpjhLDpT_xxeywWd9QA33dwMgnrGnoqML8",
        key: 3
    },
    {
        alt: "3 Keys to More Efficient Distribution Simulation Testing",
        link:"https://lso-inc.com/blog/3-keys-to-more-efficient-distribution-simulation-testing/",
        image:"https://media-exp1.licdn.com/dms/image/C5622AQHgUH4Y5I7AKw/feedshare-shrink_1280/0/1635271793676?e=1639612800&v=beta&t=zcF6DgsK6x9Pns_k8GruZQEcZ2flRQQHhLBGZ5pjxrU",
        key: 4
    },
    {
        alt: "Veterans Day",
        link:"https://www.linkedin.com/company/lso-inc",
        image:"https://media-exp1.licdn.com/dms/image/C5622AQGLm6Bw-AVpVA/feedshare-shrink_800/0/1636657622626?e=1639612800&v=beta&t=2bfC9k_-pcut1gPi8l4uNNdMsm_wYPZoM5uxOajnBTg",
        key: 1
    },
    {
        alt: "ISO 11607",
        link:"https://lso-inc.com/blog/iso-11607-answering-manufacturers-most-common-questions/",
        image:"https://lso-inc.com/wp-content/uploads/2021/09/11607_blog_feat-scaled.jpg",
        key: 2
    },
    {
        alt: "medical device sterilization",
        link:"https://lso-inc.com/blog/3-often-overlooked-elements-of-medical-device-sterilization/",
        image:"https://media-exp1.licdn.com/dms/image/C5622AQFKpzftQfNtcw/feedshare-shrink_1280/0/1636568942104?e=1639612800&v=beta&t=4FGi62wfLMpjhLDpT_xxeywWd9QA33dwMgnrGnoqML8",
        key: 3
    },
    {
        alt: "3 Keys to More Efficient Distribution Simulation Testing",
        link:"https://lso-inc.com/blog/3-keys-to-more-efficient-distribution-simulation-testing/",
        image:"https://media-exp1.licdn.com/dms/image/C5622AQHgUH4Y5I7AKw/feedshare-shrink_1280/0/1635271793676?e=1639612800&v=beta&t=zcF6DgsK6x9Pns_k8GruZQEcZ2flRQQHhLBGZ5pjxrU",
        key: 4
    },
    
]

export default posts;