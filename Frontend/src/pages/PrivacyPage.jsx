import React from 'react'
import { motion } from "framer-motion"

export const PrivacyPage = () => {

  // Privacy Policy Texts
  const privacyElements = [
    {
      title: 'Introduction',
      text: 'Welcome to The Entrepreneurship Network (referred to as "we," "our," or "us"). We are deeply committed to protecting and respecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you access our website at https://www.entrepreneurshipnetwork.net/ or utilize any of our services. By continuing to use our website, you agree to the practices described in this policy. We encourage you to read this document thoroughly to understand our approach to handling your personal data and the steps we take to safeguard your privacy.'
    },
    {
      title: 'Information We Collect',
      text: `We may collect both personal and non-personal information when you interact with our website or services. Personal information includes data that can be used to identify you, such as your name, email address, telephone number, physical address, and payment information provided for transaction purposes. This data is typically collected when you fill out forms, make purchases, or communicate with us directly. In addition to personal details, we automatically collect non-personal information about your visit, including your browser type and version, time zone settings, plug-in types, operating system, and platform. We also track details such as your navigation through the site, including the full URLs you access, your activity on each page, page response times, any download errors, the duration of visits to certain sections, interaction behaviors like scrolling and clicking, and how you leave or move away from our pages.`
    },
    {
      title: 'How We Use Your Information',
      text: 'Your personal information is used primarily to provide the services or information that you request from us, to execute obligations arising from contracts between you and us, and to notify you of any changes to the services we offer. It also helps us ensure that the content you see is displayed in the most efficient way for your device and browsing setup. As for non-personal information, we use it to administer our website, diagnose issues, conduct research and statistical analysis, and improve the performance and structure of the site. This information is vital for us to understand user behavior, maintain a seamless browsing experience, and develop new features that enhance your interaction with our services. Furthermore, such data supports the security of our platform and enables us to offer interactive functionalities when you choose to engage with them.'
    },
    {
      title: 'Disclosure of Your Information',
      text: 'We may share your personal information with members of our organizational group, including our subsidiaries and parent companies, as well as select third-party partners, suppliers, and subcontractors when necessary to fulfill contractual obligations. This sharing may include analytics providers and search engines that assist in optimizing the website. Additionally, we may disclose your personal information if we are involved in a business transaction such as the sale or acquisition of assets. In such cases, customer data may be transferred to the new owners. Moreover, we may release your information to comply with legal responsibilities or enforce our terms and conditions. These disclosures are done in alignment with the law and to protect the rights, safety, or property of The Entrepreneurship Network, our users, or others.'
    },
    {
      title: 'Your Rights',
      text: 'You have the right to access the personal data we hold about you and request corrections if any of that information is inaccurate or incomplete. You may also ask us to delete or remove your personal data when there is no longer a compelling reason for us to keep it. In certain situations, you have the right to object to our processing of your data based on legitimate interests, particularly if your circumstances give you grounds to make such a request. Furthermore, you may ask us to limit the way we process your information, or you can request that we transfer your data to another service provider of your choice. We are committed to honoring these rights and will respond to such requests in accordance with applicable data protection laws.'
    },
    {
      title: 'Data Security',
      text: 'The security of your personal data is a priority for us. We have implemented robust technical and organizational measures designed to safeguard your data from accidental loss, unauthorized access, use, modification, or disclosure. All the information you provide to us is stored securely on our servers, and we regularly review our data protection procedures to ensure their continued effectiveness.'
    },
    {
      title: 'Changes to This Privacy Policy',
      text: 'We may update this Privacy Policy from time to time to reflect changes in legal requirements, our operations, or the way we handle your personal information. Any updates will be posted on this page, and we recommend that you check back periodically to stay informed of any changes. Continued use of our website after changes are made will constitute your acceptance of those changes.'
    },
  ]

  // Animation 
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div className='flex flex-col items-center gap-8'>
      <div className="w-full  bg-gradient-to-br from-blue-900 to-indigo-900 py-4 flex justify-center items-center shadow md:py-6 lg:py-8">
        <h1 className='text-3xl text-blue-50 md:text-4xl lg:text-5xl'>Our Privacy Policy</h1>
      </div>

      <motion.ul  
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className='max-w-2/3 flex flex-col gap-12 md:max-w-2/3' >
        {
          privacyElements.map((element, key) => (
            <motion.li 
            key={key}
            variants={fadeInUp}
            className='flex flex-col gap-2 md:gap-4'>
              <h2 className='text-xl font-medium font-openSans tracking-wide md:text-3xl lg:text-4xl'>{element.title}</h2>
              <p className='text-xs md:text-sm lg:text-base'>{element.text}</p>
            </motion.li>
          ))
        }
      </motion.ul>

    </div>
  )
}
