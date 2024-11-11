import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ } from '../types';

const faqs: FAQ[] = [
  {
    question: 'How do I schedule an appointment?',
    answer: 'You can schedule an appointment through our platform by selecting your preferred doctor and choosing an available time slot that works for you.'
  },
  {
    question: 'What insurance plans do you accept?',
    answer: 'We accept most major insurance plans. You can verify your coverage during the registration process or by contacting our support team.'
  },
  {
    question: 'Can I get virtual consultations?',
    answer: 'Yes, we offer secure video consultations with our healthcare providers. You can book a virtual appointment just like a regular one.'
  },
  {
    question: 'How do I access my medical records?',
    answer: 'Your medical records are securely stored in your patient portal. You can access them anytime by logging into your account.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div id="faq" className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Find answers to common questions about our services</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}