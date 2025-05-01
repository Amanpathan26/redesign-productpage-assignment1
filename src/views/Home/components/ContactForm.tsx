import { Button, Notification, toast } from '@/components/ui'
import { useState } from 'react'
import { BiPhone, BiSend, BiUser } from 'react-icons/bi'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import { CgMail } from 'react-icons/cg'
import { Link } from 'react-router-dom'

const ContactForm = () => {
    const [formState, setFormState] = useState({
        fullname: '',
        email: '',
        subject: '',
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [focused, setFocused] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setIsSubmitting(true)
            setIsSubmitting(false)
            toast.push(
                <Notification title={'Success'} type={'success'}>
                    Successfully submitted
                </Notification>,
            )
            setFormState({
                fullname: '',
                email: '',
                subject: '',
                message: '',
            })
        } catch (err) {
            setIsSubmitting(false)
            toast.push(
                <Notification title={'Error'} type={'danger'}>
                    Submission failed
                </Notification>,
            )
        }
    }

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div className="bg-[var(--background)] text-[var(--text)] py-12 px-4 sm:px-6 lg:px-8 font-[var(--font-base)]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="relative text-4xl font-bold mb-4 pl-5 before:absolute before:left-0 before:top-0 before:h-full before:w-2 before:bg-[var(--primary)]">
                                Let's get in touch!
                            </h2>
                            <p className="text-[var(--text-muted)] text-lg">
                                Got questions about GoGetWell.AI? Our team is here to help.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="bg-[var(--primary)] p-3 rounded-lg">
                                    <BiPhone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-[var(--text-muted)]">Phone</p>
                                    <a
                                        href="tel:+919811396858"
                                        className="text-[var(--text)] hover:text-[var(--primary)] transition-colors"
                                    >
                                        +91 9811396858
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="bg-[var(--primary)] p-3 rounded-lg">
                                    <CgMail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-[var(--text-muted)]">Email</p>
                                    <a
                                        href="mailto:hello@gogetwell.ai"
                                        className="text-[var(--text)] hover:text-[var(--primary)] transition-colors"
                                    >
                                        hello@gogetwell.ai
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-[var(--text)] mb-4">Connect With Us</h3>
                            <div className="flex space-x-4">
                                <Link
                                    to="https://x.com/gogetwellai"
                                    target="_blank"
                                    className="bg-blue-500 p-3 rounded-lg hover:bg-[var(--primary)] transition-colors"
                                >
                                    <BsTwitter className="w-6 h-6 text-white" />
                                </Link>
                                <Link
                                    to="https://www.linkedin.com/company/gogetwellai/"
                                    target="_blank"
                                    className="bg-blue-500 p-3 rounded-lg hover:bg-[var(--primary)] transition-colors"
                                >
                                    <BsLinkedin className="w-6 h-6 text-white" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="bg-[var(--card-bg)] rounded-2xl shadow-lg p-4 sm:p-8 border border-[var(--border)]">
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--primary)]">
                                    <BiUser className="w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    name="fullname"
                                    placeholder="Full Name"
                                    value={formState.fullname}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('fullname')}
                                    onBlur={() => setFocused('')}
                                    className="w-full pl-12 pr-4 py-3 bg-[var(--input-bg)] border border-[var(--border)] text-[var(--text)] rounded-lg focus:outline-none focus:border-[var(--primary)]"
                                    required
                                />
                            </div>

                            <div className="relative">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--primary)]">
                                    <CgMail className="w-5 h-5" />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('email')}
                                    onBlur={() => setFocused('')}
                                    className="w-full pl-12 pr-4 py-3 bg-[var(--input-bg)] border border-[var(--border)] text-[var(--text)] rounded-lg focus:outline-none focus:border-[var(--primary)]"
                                    required
                                />
                            </div>

                            <div className="relative">
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('message')}
                                    onBlur={() => setFocused('')}
                                    rows={4}
                                    className="w-full p-4 bg-[var(--input-bg)] border border-[var(--border)] text-[var(--text)] rounded-lg focus:outline-none focus:border-[var(--primary)]"
                                    required
                                />
                            </div>

                            <Button
                                loading={isSubmitting}
                                type="submit"
                                className="w-full bg-[var(--primary)] text-white py-3 px-6 rounded-lg font-semibold hover:bg-white transition-colors duration-300 flex items-center justify-center space-x-2"
                            >
                                <span>Submit</span>
                                <BiSend className="w-5 h-5" />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
