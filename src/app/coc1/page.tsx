"use client"

import Link from 'next/link'
import { 
  Computer, 
  ArrowLeft, 
  BookOpen, 
  Video, 
  FileText, 
  CheckCircle,
  Clock,
  Users,
  ChevronRight
} from 'lucide-react'
import Footer from '@/components/Footer'

export default function COC1Page() {
  const learningObjectives = [
    'Disassemble and assemble computer hardware',
    'Install operating systems and drivers',
    'Configure BIOS/UEFI settings',
    'Install and configure application software',
    'Perform system optimization',
    'Troubleshoot hardware and software issues'
  ]

  const modules = [
    {
      id: 'module1',
      title: 'Computer Hardware Components',
      description: 'Understanding the different parts of a computer system',
      duration: '4 hours',
      topics: ['CPU, RAM, Motherboard', 'Storage Devices', 'Power Supply', 'Peripherals'],
      videoUrl: 'https://www.youtube.com/watch?v=B1r0yKSdQmo',
      practiceContent: {
        title: 'Computer Assembly and Disassembly',
        type: 'A',
        objectives: 'Apply OH&S policies and procedures, identify tools and equipment, identify computer hardware components and their functions, configure BIOS setup',
        materials: ['Protective eyewear', 'Anti-Static Wrist', 'Screw Drivers (assorted)', 'Flashlight'],
        procedures: [
          'Wear personal preventive equipment or PPE',
          'Turn off and unplug all cables attached to the system unit',
          'Disassemble the system unit within the given time duration',
          'Approach the assessor/trainer for evaluation/inspection',
          'Assemble the system unit within the given time duration',
          'Approach the assessor/trainer for evaluation/inspection'
        ],
        components: [
          {
            name: 'Motherboard',
            description: 'Main printed circuit board that holds and allows communication between crucial electronic components',
            parts: ['CPU Socket', 'RAM Slots', 'Expansion Slots', 'Power Connectors', 'I/O Ports']
          },
          {
            name: 'Processor (CPU)',
            description: 'Small chip that receives input and provides appropriate output, handles all basic system instructions',
            types: ['Intel x86', 'AMD x86', 'ARM (mobile)', 'Apple Silicon']
          },
          {
            name: 'RAM',
            description: 'Random-access memory for storing working data and machine code',
            features: ['Read/write in any order', 'Fast access time', 'Temporary storage']
          },
          {
            name: 'Hard Drive',
            description: 'Electro-mechanical data storage device using magnetic storage',
            types: ['HDD (Hard Disk Drive)', 'SSD (Solid State Drive)', 'Hybrid Drives']
          },
          {
            name: 'Power Supply',
            description: 'Converts mains AC to low-voltage regulated DC power for internal components',
            features: ['Switched-mode power supplies', 'Manual voltage selection', 'Automatic voltage adaptation']
          },
          {
            name: 'Video Cards',
            description: 'Expansion card that generates output images to display devices',
            types: ['Discrete graphics cards', 'Integrated graphics', 'Dedicated graphics']
          }
        ],
        biosInfo: {
          title: 'BIOS (Basic Input Output System)',
          description: 'ROM chip on motherboard that allows access and setup of computer system at basic level',
          functions: [
            'POST - Test computer hardware before loading OS',
            'Bootstrap Loader - Locate operating system',
            'BIOS drivers - Low-level drivers for hardware control',
            'BIOS setup - Configuration program for hardware settings'
          ],
          accessKeys: ['F1', 'F2', 'F10', 'Del', 'Esc'],
          setupSteps: [
            'Press appropriate key during boot process',
            'Configure system settings, passwords, time, date',
            'Set boot sequence and hardware parameters',
            'Save and exit BIOS setup'
          ]
        }
      }
    },
    {
      id: 'module2',
      title: 'System Assembly and Disassembly',
      description: 'Hands-on practice with computer assembly',
      duration: '6 hours',
      topics: ['Safety Procedures', 'Component Installation', 'Cable Management', 'Testing'],
      videoUrl: 'https://www.youtube.com/watch?v=19G73qbJ4tg',
      practiceContent: {
        title: 'Create Bootable Media',
        type: 'B',
        objectives: 'Create portable bootable image or installer using different media devices in accordance with software manufacturer instructions',
        materials: ['Operating System ISO', 'Universal Serial Bus (USB)', 'DVD Disk', 'Rufus/ISO image tool'],
        procedures: [
          'Download and install Rufus application',
          'Insert the bootable media or USB',
          'Select and choose Windows (7,10) operating system',
          'Select start and configure the bootable device in BIOS',
          'Test and boot using USB'
        ],
        rufusSteps: [
          'Download Rufus from https://rufus.ie/',
          'Plug in USB drive and select it in Rufus',
          'Click "Select" and choose your ISO file',
          'Select "MBR" partition scheme and "BIOS or UEFI" target system',
          'Set volume label and ensure "Quick Format" is selected',
          'Click "Start" and wait for completion',
          'Test the bootable USB drive'
        ]
      }
    },
    {
      id: 'module3',
      title: 'Operating System Installation',
      description: 'Installing and configuring Windows/Linux',
      duration: '8 hours',
      topics: ['OS Selection', 'Installation Process', 'Driver Installation', 'Updates'],
      practiceContent: {
        title: 'Windows Server Installation',
        type: 'B',
        objectives: 'Install operating system and drivers for peripherals/devices',
        materials: ['Bootable USB with Windows Server', 'Computer system', 'Driver installation tools'],
        procedures: [
          'Insert bootable USB and set USB as first boot device',
          'Select language, currency, time format, and keyboard type',
          'Click "Install Now"',
          'Select Windows Server version to install',
          'Accept license terms and click "Next"',
          'Choose "Custom (Advanced)" for fresh installation',
          'Select target disk and click "Next"',
          'Wait for installation to complete (20+ minutes)',
          'Set administrator password after restart',
          'Login to access server'
        ],
        osInfo: {
          title: 'Operating System Types and Features',
          description: 'Software that acts as interface between end user and computer hardware',
          types: [
            'Batch Operating System',
            'Multitasking/Time Sharing OS',
            'Multiprocessing OS',
            'Real Time OS',
            'Distributed OS',
            'Network OS',
            'Mobile OS'
          ],
          functions: [
            'Process management',
            'Memory management',
            'File management',
            'Device management',
            'I/O System management',
            'Security',
            'Networking',
            'Command interpretation'
          ]
        },
        driverInstallation: {
          title: 'Driver Installation using DriverPack Solution',
          description: 'Free driver updater tool that finds and installs proper device drivers',
          steps: [
            'Open DriverPack Solution from drive D',
            'Click on SETTINGS, EXPORT MODE',
            'Select all drivers you want to install',
            'Click on INSTALL DRIVERS',
            'Restart computer after installation'
          ]
        }
      }
    },
    {
      id: 'module4',
      title: 'Software Configuration',
      description: 'Installing and configuring applications',
      duration: '6 hours',
      topics: ['Office Applications', 'Security Software', 'Utility Programs', 'Optimization'],
      practiceContent: {
        title: 'Application Software Installation',
        type: 'A',
        objectives: 'Install and configure application software for optimal system performance',
        materials: ['Application installation files', 'System with OS installed', 'Internet connection'],
        procedures: [
          'Download or insert installation media',
          'Run installation executable',
          'Follow installation wizard',
          'Configure application settings',
          'Test application functionality',
          'Update and patch as needed'
        ]
      }
    }
  ]

  const assessmentCriteria = [
    'Proper disassembly and assembly procedures',
    'Correct component identification',
    'Successful OS installation',
    'Proper driver installation',
    'System optimization',
    'Troubleshooting skills'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/coc2" className="text-gray-600 hover:text-gray-900">COC 2</Link>
              <Link href="/coc3" className="text-gray-600 hover:text-gray-900">COC 3</Link>
              <Link href="/coc4" className="text-gray-600 hover:text-gray-900">COC 4</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center mb-6">
            <Computer className="h-12 w-12 mr-4" />
            <div>
              <h1 className="text-4xl font-bold">COC 1: Installing and Configuring Computer Systems</h1>
              <p className="text-xl opacity-90">Computer Hardware and Software Installation</p>
            </div>
          </div>
          <p className="text-lg max-w-3xl">
            This module covers the installation and configuration of computer hardware and software. 
            You will learn how to disassemble and assemble computers, install operating systems, 
            and configure necessary applications.
          </p>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Duration</h3>
              <p className="text-gray-600">24 Hours</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Prerequisites</h3>
              <p className="text-gray-600">Intro to CSS Course</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Format</h3>
              <p className="text-gray-600">Lecture + Hands-on</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Objectives */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Learning Objectives</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              By the end of this module, you will be able to:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningObjectives.map((objective, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{objective}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Modules</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Structured learning modules to guide you through the complete process.
            </p>
          </div>
          
          <div className="space-y-6">
            {modules.map((module, index) => (
              <div key={module.id} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">
                        {index + 1}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900">{module.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{module.description}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Clock className="h-4 w-4 mr-1" />
                      {module.duration}
                    </div>
                    <div className="grid md:grid-cols-2 gap-2">
                      {module.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center text-sm text-gray-600">
                          <ChevronRight className="h-3 w-3 mr-2 text-blue-500" />
                          {topic}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="ml-6 flex space-x-2">
                    {module.videoUrl && (
                      <button 
                        onClick={() => {
                          const modal = document.getElementById(`video-modal-${module.id}`);
                          if (modal) modal.classList.remove('hidden');
                        }}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                      >
                        <Video className="h-4 w-4 mr-2" />
                        Watch
                      </button>
                    )}
                    <button 
                      onClick={() => {
                        const modal = document.getElementById(`practice-modal-${module.id}`);
                        if (modal) modal.classList.remove('hidden');
                      }}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      Practice
                    </button>
                  </div>
                </div>

                {/* Video Modal */}
                {module.videoUrl && (
                  <div id={`video-modal-${module.id}`} className="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
                      <div className="p-4 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                          <h3 className="text-xl font-bold text-gray-900">{module.title} - Video Tutorial</h3>
                          <button 
                            onClick={() => {
                              const modal = document.getElementById(`video-modal-${module.id}`);
                              const iframe = modal?.querySelector('iframe');
                              if (iframe) {
                                // Stop the video by changing the src
                                const currentSrc = iframe.src;
                                iframe.src = '';
                                iframe.src = currentSrc;
                              }
                              if (modal) modal.classList.add('hidden');
                            }}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                          <iframe
                            id={`video-iframe-${module.id}`}
                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                            src={module.videoUrl.replace('watch?v=', 'embed/')}
                            title={`${module.title} Video Tutorial`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                        <div className="mt-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Video Description:</h4>
                          <p className="text-gray-600">{module.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Practice Modal */}
                <div id={`practice-modal-${module.id}`} className="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                  <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold text-gray-900">{module.practiceContent?.title}</h3>
                        <button 
                          onClick={() => {
                            const modal = document.getElementById(`practice-modal-${module.id}`);
                            if (modal) modal.classList.add('hidden');
                          }}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>

                      {module.practiceContent && (
                        <div className="space-y-6">
                          {/* Objectives */}
                          <div className="bg-blue-50 rounded-lg p-4">
                            <h4 className="font-semibold text-blue-900 mb-2">Objectives:</h4>
                            <p className="text-blue-800">{module.practiceContent.objectives}</p>
                          </div>

                          {/* Materials */}
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Materials Needed:</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                              {module.practiceContent.materials.map((material, idx) => (
                                <li key={idx}>{material}</li>
                              ))}
                            </ul>
                          </div>

                          {/* Procedures */}
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Step-by-Step Procedures:</h4>
                            <ol className="list-decimal list-inside space-y-2 text-gray-700">
                              {module.practiceContent.procedures.map((procedure, idx) => (
                                <li key={idx}>{procedure}</li>
                              ))}
                            </ol>
                          </div>

                          {/* Additional Content for Module 1 */}
                          {module.id === 'module1' && module.practiceContent.components && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Computer Components:</h4>
                              <div className="grid md:grid-cols-2 gap-4">
                                {module.practiceContent.components.map((component, idx) => (
                                  <div key={idx} className="bg-gray-50 rounded-lg p-4">
                                    <h5 className="font-semibold text-gray-900 mb-2">{component.name}</h5>
                                    <p className="text-sm text-gray-600 mb-2">{component.description}</p>
                                    {component.parts && (
                                      <div>
                                        <span className="text-xs font-medium text-gray-500">Key Parts:</span>
                                        <ul className="text-xs text-gray-600 mt-1">
                                          {component.parts.map((part, partIdx) => (
                                            <li key={partIdx}>• {part}</li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                    {component.types && (
                                      <div>
                                        <span className="text-xs font-medium text-gray-500">Types:</span>
                                        <ul className="text-xs text-gray-600 mt-1">
                                          {component.types.map((type, typeIdx) => (
                                            <li key={typeIdx}>• {type}</li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                    {component.features && (
                                      <div>
                                        <span className="text-xs font-medium text-gray-500">Features:</span>
                                        <ul className="text-xs text-gray-600 mt-1">
                                          {component.features.map((feature, featureIdx) => (
                                            <li key={featureIdx}>• {feature}</li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* BIOS Information for Module 1 */}
                          {module.id === 'module1' && module.practiceContent.biosInfo && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">BIOS Configuration:</h4>
                              <div className="bg-yellow-50 rounded-lg p-4">
                                <h5 className="font-semibold text-yellow-900 mb-2">{module.practiceContent.biosInfo.title}</h5>
                                <p className="text-yellow-800 mb-3">{module.practiceContent.biosInfo.description}</p>
                                <div className="mb-3">
                                  <span className="text-sm font-medium text-yellow-900">Main Functions:</span>
                                  <ul className="text-sm text-yellow-800 mt-1 space-y-1">
                                    {module.practiceContent.biosInfo.functions.map((func, funcIdx) => (
                                      <li key={funcIdx}>• {func}</li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="mb-3">
                                  <span className="text-sm font-medium text-yellow-900">Access Keys:</span>
                                  <p className="text-sm text-yellow-800 mt-1">{module.practiceContent.biosInfo.accessKeys.join(', ')}</p>
                                </div>
                                <div>
                                  <span className="text-sm font-medium text-yellow-900">Setup Steps:</span>
                                  <ol className="text-sm text-yellow-800 mt-1 space-y-1">
                                    {module.practiceContent.biosInfo.setupSteps.map((step, stepIdx) => (
                                      <li key={stepIdx}>{stepIdx + 1}. {step}</li>
                                    ))}
                                  </ol>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Rufus Steps for Module 2 */}
                          {module.id === 'module2' && module.practiceContent.rufusSteps && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Rufus Application Steps:</h4>
                              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                {module.practiceContent.rufusSteps.map((step, idx) => (
                                  <li key={idx}>{step}</li>
                                ))}
                              </ol>
                            </div>
                          )}

                          {/* OS Information for Module 3 */}
                          {module.id === 'module3' && module.practiceContent.osInfo && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Operating System Information:</h4>
                              <div className="bg-green-50 rounded-lg p-4">
                                <h5 className="font-semibold text-green-900 mb-2">{module.practiceContent.osInfo.title}</h5>
                                <p className="text-green-800 mb-3">{module.practiceContent.osInfo.description}</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                  <div>
                                    <span className="text-sm font-medium text-green-900">OS Types:</span>
                                    <ul className="text-sm text-green-800 mt-1 space-y-1">
                                      {module.practiceContent.osInfo.types.map((type, typeIdx) => (
                                        <li key={typeIdx}>• {type}</li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div>
                                    <span className="text-sm font-medium text-green-900">OS Functions:</span>
                                    <ul className="text-sm text-green-800 mt-1 space-y-1">
                                      {module.practiceContent.osInfo.functions.map((func, funcIdx) => (
                                        <li key={funcIdx}>• {func}</li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Driver Installation for Module 3 */}
                          {module.id === 'module3' && module.practiceContent.driverInstallation && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Driver Installation:</h4>
                              <div className="bg-purple-50 rounded-lg p-4">
                                <h5 className="font-semibold text-purple-900 mb-2">{module.practiceContent.driverInstallation.title}</h5>
                                <p className="text-purple-800 mb-3">{module.practiceContent.driverInstallation.description}</p>
                                <ol className="list-decimal list-inside space-y-2 text-purple-800">
                                  {module.practiceContent.driverInstallation.steps.map((step, idx) => (
                                    <li key={idx}>{step}</li>
                                  ))}
                                </ol>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Criteria */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Assessment Criteria</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your performance will be evaluated based on the following criteria:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {assessmentCriteria.map((criterion, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center">
                  <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 font-medium">{criterion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation to Next COC */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready for the Next Step?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Continue your journey with COC 2: Setting up Computer Networks
            </p>
            <Link 
              href="/coc2"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center"
            >
              Continue to COC 2 <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
} 