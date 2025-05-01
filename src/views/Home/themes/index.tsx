import { useState } from 'react'
import { useThemeStore } from '@/store/themeStore'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'

const themes = [
  {
    id: 'default',
    name: 'Default Theme',
    description: 'Clean, general-purpose medical layout',
    previewColor: '#2563eb',
  },
  {
    id: 'theme1',
    name: 'Organ Transplant',
    description: 'Specialized layout for transplant centers',
    previewColor: '#6b7280',
  },
  {
    id: 'theme2',
    name: 'Cosmetic Surgery',
    description: 'Sleek look for aesthetics and surgery clinics',
    previewColor: '#7fee53',
  },
]

const Themes = () => {
  const { specialty, setSpecialty } = useThemeStore()
  const [previewTheme, setPreviewTheme] = useState<string | null>(null)
  const navigate = useNavigate();

  const handlePreview = (themeId: string) => {
    setSpecialty(themeId as any)
    setPreviewTheme(themeId)
  }

  const closePreview = () => setPreviewTheme(null)

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Select a Theme</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {themes.map((theme) => (
          <div
            key={theme.id}
            className={clsx(
              'border rounded-lg shadow-md transition-all p-4',
              specialty === theme.id
                ? 'border-primary ring-2 ring-primary'
                : 'border-gray-200',
            )}
          >
            <div
              className="h-32 rounded-md mb-4"
              style={{ backgroundColor: theme.previewColor }}
            ></div>
            <h2 className="text-xl font-semibold">{theme.name}</h2>
            <p className="text-sm text-gray-600 mb-4">{theme.description}</p>
            <button
              onClick={() => {
                setSpecialty(theme.id as any)
                navigate('/')
              }}
              className={clsx(
                'px-4 py-2 rounded-md text-white font-medium transition mb-2 w-full',
                specialty === theme.id
                  ? 'bg-primary cursor-default'
                  : 'bg-gray-800 hover:bg-primary',
              )}
              disabled={specialty === theme.id}
            >
              {specialty === theme.id ? 'Active' : 'Use Theme'}
            </button>

            <button
              onClick={() => handlePreview(theme.id)}
              className="w-full px-4 py-2 rounded-md text-primary border border-primary hover:bg-primary hover:text-white transition"
            >
              Preview
            </button>
          </div>
        ))}
      </div>

      {previewTheme && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white w-full max-w-6xl h-[80vh] relative rounded-lg overflow-hidden">
            <button
              onClick={closePreview}
              className="absolute top-2 right-2 z-10 bg-white text-black px-3 py-1 rounded shadow"
            >
              Close
            </button>
            <iframe
              src="/"
              className="w-full h-full border-none"
              title="Theme Preview"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Themes
