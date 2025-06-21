"use client"

import { useState, useEffect } from 'react'
import { 
  Video, 
  FileText,
  Clock,
  ChevronRight
} from 'lucide-react'

export default function COC1Modules() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [openPracticeModal, setOpenPracticeModal] = useState<string | null>(null)

  // Lock body scroll when any modal is open
  useEffect(() => {
    if (selectedVideo || openPracticeModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedVideo, openPracticeModal])

  const modules = [
    {
      id: 'module1',
      title: 'Computer Hardware Components',
      description: 'Understanding the different parts of a computer system',
      duration: '4 hours',
      topics: ['CPU, RAM, Motherboard', 'Storage Devices', 'Power Supply', 'Peripherals'],
      videoUrl: 'https://www.youtube.com/watch?v=B1r0yKSdQmo',
      practiceContent: {
        title: 'Computer Hardware Components',
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
      description: 'Hands-on practice with safely disassembling and reassembling a computer system.',
      duration: '6 hours',
      topics: ['Safety Procedures', 'Disassembly Process', 'Component Identification', 'Assembly Techniques'],
      videoUrl: 'https://www.youtube.com/watch?v=19G73qbJ4tg',
      practiceContent: {
        title: 'System Assembly and Disassembly',
        type: 'A',
        objectives: 'Demonstrate safety procedures, identify internal hardware components, and perform proper disassembly and reassembly of a computer system.',
        materials: ['Anti-Static Wrist Strap', 'Screwdrivers (assorted)', 'Protective eyewear', 'Computer system unit'],
        procedures: [
          'Wear PPE and anti-static wrist strap before handling internal components',
          'Turn off and unplug the system unit from power and peripherals',
          'Remove the case cover carefully',
          'Document and remove key components (RAM, HDD/SSD, PSU, GPU, etc.) using proper tools and handling',
          'Inspect and identify each component removed',
          'Reassemble the computer system by reinstalling each component properly',
          'Ensure all internal cables are connected and managed properly',
          'Power on the system and verify successful reassembly',
          'Access BIOS to verify hardware detection'
        ],
        components: [
          {
            name: 'System Unit Case',
            description: 'Enclosure that contains and protects internal components',
            parts: ['Side panels', 'Drive bays', 'Front panel connectors']
          },
          {
            name: 'Motherboard',
            description: 'Main PCB holding CPU, memory, and expansion components',
            parts: ['CPU Socket', 'RAM Slots', 'Power Connector', 'SATA Ports']
          },
          {
            name: 'Processor (CPU)',
            description: 'Handles processing instructions and tasks',
            types: ['Intel', 'AMD']
          },
          {
            name: 'RAM',
            description: 'Temporary memory for system processes and active tasks',
            features: ['DDR3/DDR4/DDR5', 'Dual Channel', 'Speed Ratings']
          },
          {
            name: 'Storage Drive',
            description: 'Stores OS and data; can be HDD or SSD',
            types: ['SATA HDD', 'SATA SSD', 'NVMe M.2']
          },
          {
            name: 'Power Supply Unit (PSU)',
            description: 'Provides power to all internal components',
            features: ['Modular/Non-Modular', 'Wattage', 'Voltage rails']
          },
          {
            name: 'Cooling System',
            description: 'Maintains optimal temperature for the CPU and other components',
            types: ['Air Cooling', 'Liquid Cooling']
          }
        ],
        biosInfo: {
          title: 'BIOS Access and Settings',
          description: 'Configure hardware-level settings after reassembly',
          functions: [
            'Verify component recognition (RAM, storage, CPU)',
            'Set date and time',
            'Adjust boot priority if needed'
          ],
          accessKeys: ['Del', 'F2', 'Esc', 'F10'],
          setupSteps: [
            'Power on the system and press the appropriate key repeatedly',
            'Check system summary and verify hardware',
            'Save and exit to boot into OS or bootable media'
          ]
        }
      }
    },    
    {
      id: 'module3',
      title: 'Creating Bootable Media',
      description: 'Learn how to prepare a USB drive for installing an operating system.',
      duration: '4 hours',
      topics: ['Using Rufus to create bootable USB', 'Selecting ISO files (Windows Server)', 'Configuring BIOS/UEFI to boot from USB', 'Verifying Boot Media'],
      videoUrl: 'https://www.youtube.com/watch?v=7ds3IcpNCXY',
      practiceContent: {
        title: 'Create Bootable Media',
        type: 'B',
        objectives: 'Create portable bootable image or installer using different media devices in accordance with software manufacturer instructions',
        materials: ['Operating System ISO', 'Universal Serial Bus (USB)', 'DVD Disk', 'Rufus/ISO image tool'],
        procedures: [
          'Download and install Rufus application',
          'Insert the bootable media or USB',
          'Select and choose Windows Server operating system',
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
      id: 'module4',
      title: 'Operating System Installation',
      description: 'Install and configure Windows Server OS.',
      duration: '6 hours',
      topics: ['Installation Process (Partitioning, Setup)', 'Setting Administrator Password', 'Driver Installation', 'Initial Post-Install Configuration'],
      videoUrl: 'https://www.youtube.com/watch?v=CagoNA-cIi0',
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
            'Error detection'
          ]
        }
      }
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Modules</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Structured learning modules covering all aspects of computer system installation and configuration.
          </p>
        </div>
        
        <div className="space-y-6">
          {modules.map((module, index) => (
            <div key={module.id} className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1 mb-4 lg:mb-0">
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
                <div className="flex flex-col sm:flex-row gap-2 lg:ml-6 lg:flex-shrink-0">
                  <button 
                    onClick={() => setSelectedVideo(module.videoUrl)}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center"
                  >
                    <Video className="h-4 w-4 mr-2" />
                    Watch Video
                  </button>
                  <button 
                    onClick={() => setOpenPracticeModal(module.id)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Practice
                  </button>
                </div>
              </div>

              {/* Video Modal */}
              {selectedVideo === module.videoUrl && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4">
                  <div className="bg-white rounded-lg w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden">
                    <div className="p-3 sm:p-4 border-b border-gray-200">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 pr-2">{module.title} - Video Tutorial</h3>
                        <button 
                          onClick={() => setSelectedVideo(null)}
                          className="text-gray-500 hover:text-gray-700 flex-shrink-0"
                        >
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="p-3 sm:p-4">
                      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                        <iframe
                          id={`video-iframe-${module.id}`}
                          className="absolute top-0 left-0 w-full h-full rounded-lg"
                          src={module.videoUrl.includes('youtu.be') 
                            ? `https://www.youtube.com/embed/${module.videoUrl.split('youtu.be/')[1].split('?')[0]}`
                            : module.videoUrl.replace('watch?v=', 'embed/').split('&')[0]
                          }
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
              {openPracticeModal === module.id && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4">
                  <div className="bg-white rounded-lg w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
                    <div className="p-4 sm:p-6">
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 pr-2">{module.practiceContent?.title}</h3>
                        <button 
                          onClick={() => setOpenPracticeModal(null)}
                          className="text-gray-500 hover:text-gray-700 flex-shrink-0"
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

                          {/* Hardware Components for Module 1 */}
                          {module.id === 'module1' && module.practiceContent.components && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Hardware Components:</h4>
                              <div className="grid md:grid-cols-2 gap-4">
                                {module.practiceContent.components.map((component, idx) => (
                                  <div key={idx} className="bg-gray-50 rounded-lg p-4">
                                    <h5 className="font-semibold text-gray-900 mb-2">{component.name}</h5>
                                    <p className="text-gray-600 text-sm mb-3">{component.description}</p>
                                    {component.parts && (
                                      <div className="mb-3">
                                        <span className="text-xs font-medium text-gray-900">Key Parts:</span>
                                        <ul className="text-xs text-gray-700 mt-1">
                                          {component.parts.map((part, partIdx) => (
                                            <li key={partIdx}>• {part}</li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                    {component.types && (
                                      <div className="mb-3">
                                        <span className="text-xs font-medium text-gray-900">Types:</span>
                                        <ul className="text-xs text-gray-700 mt-1">
                                          {component.types.map((type, typeIdx) => (
                                            <li key={typeIdx}>• {type}</li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                    {component.features && (
                                      <div>
                                        <span className="text-xs font-medium text-gray-900">Features:</span>
                                        <ul className="text-xs text-gray-700 mt-1">
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
                              <h4 className="font-semibold text-gray-900 mb-3">BIOS Information:</h4>
                              <div className="bg-yellow-50 rounded-lg p-4">
                                <h5 className="font-semibold text-yellow-900 mb-2">{module.practiceContent.biosInfo.title}</h5>
                                <p className="text-yellow-800 mb-3">{module.practiceContent.biosInfo.description}</p>
                                <div className="mb-3">
                                  <span className="text-sm font-medium text-yellow-900">Functions:</span>
                                  <ul className="text-sm text-yellow-800 mt-1 space-y-1">
                                    {module.practiceContent.biosInfo.functions.map((func, idx) => (
                                      <li key={idx}>• {func}</li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="mb-3">
                                  <span className="text-sm font-medium text-yellow-900">Access Keys:</span>
                                  <p className="text-sm text-yellow-800 mt-1">{module.practiceContent.biosInfo.accessKeys.join(', ')}</p>
                                </div>
                                <div>
                                  <span className="text-sm font-medium text-yellow-900">Setup Steps:</span>
                                  <ol className="text-sm text-yellow-800 mt-1 space-y-1 list-decimal list-inside">
                                    {module.practiceContent.biosInfo.setupSteps.map((step, idx) => (
                                      <li key={idx}>{step}</li>
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
                              <div className="bg-green-50 rounded-lg p-4">
                                <ol className="list-decimal list-inside space-y-2 text-green-800">
                                  {module.practiceContent.rufusSteps.map((step, idx) => (
                                    <li key={idx}>{step}</li>
                                  ))}
                                </ol>
                              </div>
                            </div>
                          )}

                          {/* OS Information for Module 3 */}
                          {module.id === 'module3' && module.practiceContent.osInfo && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Operating System Information:</h4>
                              <div className="bg-purple-50 rounded-lg p-4">
                                <h5 className="font-semibold text-purple-900 mb-2">{module.practiceContent.osInfo.title}</h5>
                                <p className="text-purple-800 mb-3">{module.practiceContent.osInfo.description}</p>
                                <div className="mb-3">
                                  <span className="text-sm font-medium text-purple-900">Types:</span>
                                  <ul className="text-sm text-purple-800 mt-1 space-y-1">
                                    {module.practiceContent.osInfo.types.map((type, idx) => (
                                      <li key={idx}>• {type}</li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <span className="text-sm font-medium text-purple-900">Functions:</span>
                                  <ul className="text-sm text-purple-800 mt-1 space-y-1">
                                    {module.practiceContent.osInfo.functions.map((func, idx) => (
                                      <li key={idx}>• {func}</li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 