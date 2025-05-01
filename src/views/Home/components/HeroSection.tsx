import { Button } from '@/components/ui'
import HomeNavbar from '@/components/shared/HomeNav'
import HcfSignupPopup from '@/components/shared/Popups/HcfSignupPopup'

interface HeroSectionProps {
    scrollToSection: (ref: React.RefObject<HTMLElement>) => void
    featuresRef: React.RefObject<HTMLElement>
    contactRef: React.RefObject<HTMLElement>
    aboutRef: React.RefObject<HTMLElement>
}

const HeroSection: React.FC<HeroSectionProps> = ({
    scrollToSection,
    featuresRef,
    contactRef,
    aboutRef,
}) => {
    return (
        <div className="w-full relative flex flex-col overflow-hidden">
            <HomeNavbar
                scrollToSection={scrollToSection}
                featuresRef={featuresRef}
                contactRef={contactRef}
                aboutRef={aboutRef}
            />

            <div
                className="min-h-[90vh] flex items-center relative px-4"
                style={{
                    fontFamily: 'var(--font-base)',
                }}
            >
                <div className="absolute top-0 left-0 w-full h-full opacity-40 z-[-5]" />

                <div className="w-full flex flex-col lg:flex-row-reverse md:mt-6 lg:mt-0 lg:items-center lg:justify-between max-w-[1538px] mx-auto">
                    <div className="lg:w-1/2 mx-auto text-center">
                        <h1
                            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 capitalize"
                            style={{
                                fontFamily: 'var(--font-heading)',
                                color: 'var(--text)',
                            }}
                        >
                            <span style={{ color: 'var(--primary)' }}>AI front office</span><br />
                            for healthcare agents
                        </h1>

                        <p
                            className="text-lg xs:text-xl md:text-2xl my-8 font-light"
                            style={{
                                fontFamily: 'var(--font-base)',
                                color: 'var(--text)'
                            }}
                        >
                            Create <span style={{ color: 'var(--primary)', fontWeight: 700, }}>AI Store</span> in 2 min
                            <br />
                            Scale with <span style={{ fontWeight: 700, color: 'var(--primary)' }}>Digital Marketing</span>
                        </p>

                        <div >
                            <HcfSignupPopup
                                popupButtonStatus
                                buttonChildren={
                                    <Button
                                        block
                                        variant="solid"
                                        className="rounded-[5px] max-w-[200px]"
                                    >
                                        Get Started
                                    </Button>
                                }
                            />
                        </div>

                        <div className="flex gap-12 mt-8 flex-wrap justify-center">
                            {[
                                { count: '2100+', label: 'qualified doctors' },
                                { count: '1000+', label: 'hospitals' },
                                { count: '800+', label: 'Treatment Plans' },
                            ].map((item, i) => (
                                <div key={i} className="text-center">
                                    <h1
                                        className="text-3xl font-bold"
                                        style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}
                                    >
                                        {item.count.replace('+', '')}
                                        <span style={{ color: 'var(--primary)' }}>+</span>
                                    </h1>
                                    <p className="text-lg capitalize" style={{ fontFamily: 'var(--font-base)', color: 'var(--text)' }}>
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
