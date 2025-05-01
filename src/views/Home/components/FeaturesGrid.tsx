import React from 'react'
import {
  BiCreditCard,
  BiGlobeAlt,
  BiMessageSquare,
  BiSearch,
  BiTrendingUp,
} from 'react-icons/bi'
import { BsDatabase } from 'react-icons/bs'
import { FaUserSecret } from 'react-icons/fa'
import { FiFileText } from 'react-icons/fi'
import { LuLanguages } from 'react-icons/lu'

const solutions = [
  {
    icon: <BiGlobeAlt />,
    title: 'Custom AI-Powered Website',
    description:
      'Responsive, intelligent websites tailored for healthcare providers with automated patient engagement.',
  },
  {
    icon: <FaUserSecret />,
    title: 'Enhanced Patient Conversion',
    description:
      'Optimize conversions by personalizing user journeys to turn leads into patients.',
  },
  {
    icon: <BiMessageSquare />,
    title: 'Real-Time Query Handling',
    description:
      'Respond to patient inquiries instantly with AI-driven, always-on chat support.',
  },
  {
    icon: <FiFileText />,
    title: 'Medical Report Analysis',
    description:
      'Automate assessments with advanced AI-driven medical report interpretation.',
  },
  {
    icon: <BiTrendingUp />,
    title: 'Improved Lead Generation',
    description:
      'Drive growth with data-backed strategies to attract and convert high-quality leads.',
  },
  {
    icon: <BsDatabase />,
    title: 'Comprehensive Healthcare Database',
    description:
      'Leverage a wide-reaching database for informed medical decision-making.',
  },
  {
    icon: <LuLanguages />,
    title: 'Multilingual Support',
    description:
      'Bridge communication gaps with dynamic support in multiple global languages.',
  },
  {
    icon: <BiCreditCard />,
    title: 'Seamless Payment Handling',
    description:
      'Enable secure, smooth payment transactions for global patient services.',
  },
  {
    icon: <BiSearch />,
    title: 'Marketing And SEO Support',
    description:
      'Boost visibility and engagement with AI-enhanced SEO and digital marketing.',
  },
]

const FeaturesGrid: React.FC = () => {
  return (
    <section
      className="py-16 px-4 md:px-8"
      style={{
        backgroundColor: 'var(--background)',
        color: 'var(--text)',
        fontFamily: 'var(--font-base)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Comprehensive Solutions</h2>
          <div
            className="h-1 w-24 mx-auto rounded-full"
            style={{ backgroundColor: 'var(--primary)' }}
          />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <article
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg transition-transform transform hover:scale-95 hover:shadow-xl"
              style={{ backgroundColor: 'var(--primaryMild)' }}
            >
              <div className="p-6 pt-0 text-center">
                <div
                  className="inline-flex py-3 px-10 text-2xl text-white rounded-b-[50%] mb-3 outline outline-1 outline-offset-[-3px]"
                  style={{ backgroundColor: 'var(--primaryDeep)' }}
                >
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                <p
                  className="leading-relaxed text-sm sm:text-base"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {solution.description}
                </p>
              </div>
              <div
                className="h-1 w-full absolute bottom-0 left-0 opacity-75"
                style={{ backgroundColor: 'var(--primary)' }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesGrid
