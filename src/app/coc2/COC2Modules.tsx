"use client"

import { useState, useEffect } from 'react'
import { 
  Video, 
  FileText, 
  Clock,
  ChevronRight,
  Award,
  AlertTriangle
} from 'lucide-react'

export default function COC2Modules() {
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
      title: 'Network Fundamentals',
      description: 'Understanding computer networks, types, and topology',
      duration: '6 hours',
      videoUrl: 'https://www.youtube.com/watch?v=EWTJKcg7Pj8',
      topics: ['Network Types (LAN, WAN, MAN)', 'Network Topology', 'Network Components', 'OSI Model'],
      isAssessmentTask: false,
      taskNumber: null,
      practiceContent: {
        title: 'Network Types and Topology',
        type: 'A',
        objectives: 'Understand different network types and topology configurations',
        materials: ['Network diagrams', 'Computer systems', 'Network simulation software'],
        procedures: [
          'Study different network types (LAN, WAN, PAN, MAN)',
          'Analyze network topology diagrams',
          'Identify network components and their functions',
          'Practice network design principles',
          'Document network architecture'
        ],
        networkTypes: [
          {
            name: 'Local Area Networks (LAN)',
            description: 'Network that connects computers within a limited area',
            examples: ['School network', 'Office network', 'Home network']
          },
          {
            name: 'Wide Area Networks (WAN)',
            description: 'Network that covers larger geographical areas',
            examples: ['Internet', 'Corporate network across cities']
          },
          {
            name: 'Personal Area Networks (PAN)',
            description: 'Network based on individual workspace',
            examples: ['Bluetooth devices', 'Personal computer setup']
          },
          {
            name: 'Metropolitan Area Networks (MAN)',
            description: 'Network stretching across metropolitan areas',
            examples: ['City-wide network', 'University campus network']
          }
        ],
        topologyTypes: [
          {
            name: 'Star Topology',
            description: 'Central node connects to each computer independently',
            advantages: ['Easy to manage', 'One failure doesn\'t affect others'],
            disadvantages: ['Requires many cables', 'Central point failure']
          },
          {
            name: 'Bus Topology',
            description: 'Single cable connects all computers',
            advantages: ['Less cabling required', 'Simple setup'],
            disadvantages: ['Single point of failure', 'Difficult troubleshooting']
          },
          {
            name: 'Ring Topology',
            description: 'Computers connected in a circular pattern',
            advantages: ['Equal access to network', 'Good performance'],
            disadvantages: ['Single failure affects all', 'Difficult to expand']
          },
          {
            name: 'Mesh Topology',
            description: 'All nodes interconnected with each other',
            advantages: ['Highly reliable', 'Multiple paths available'],
            disadvantages: ['Expensive', 'Complex configuration']
          }
        ]
      }
    },
    {
      id: 'module2',
      title: 'Network Cabling',
      description: 'Cable types, crimping, and network tools',
      duration: '8 hours',
      videoUrl: 'https://www.youtube.com/watch?v=NWhoJp8UQpo',
      topics: ['UTP/STP Cables', 'Cable Crimping', 'Color Coding', 'Network Tools'],
      isAssessmentTask: false,
      taskNumber: null,
      practiceContent: {
        title: 'Cable Crimping with Color Coding',
        type: 'A',
        objectives: 'Create cable connection using UTP cable with specific standard tools and materials in accordance to cable color coding',
        materials: ['UTP Cable', 'RJ45 Connectors', 'Crimping Tools', 'LAN Cable Tester'],
        procedures: [
          'Get a UTP cable and crimp both ends using crimping tools and RJ45',
          'Perform color coding T-568A',
          'Test the cable using LAN cable tester'
        ],
        cableTypes: [
          {
            name: 'Unshielded Twisted Pair (UTP)',
            description: 'Copper cabling with twisted pairs without shielding',
            categories: ['Cat5e', 'Cat6', 'Cat6a', 'Cat7'],
            uses: ['Ethernet networks', 'Telephone systems', 'Data transmission']
          },
          {
            name: 'Shielded Twisted Pair (STP)',
            description: 'Copper cabling with additional shielding',
            advantages: ['Reduces interference', 'Better performance'],
            disadvantages: ['More expensive', 'Harder to install']
          },
          {
            name: 'Coaxial Cable',
            description: 'Cable with inner conductor surrounded by concentric shield',
            uses: ['Cable TV', 'Internet connections', 'Video transmission']
          },
          {
            name: 'Fiber Optic Cable',
            description: 'Cable containing optical fibers for light transmission',
            advantages: ['High speed', 'Long distance', 'No interference'],
            disadvantages: ['Expensive', 'Fragile', 'Complex installation']
          }
        ],
        colorCoding: {
          t568a: {
            name: 'T-568A Standard',
            pairs: [
              { pair: 1, colors: ['White/Green', 'Green'] },
              { pair: 2, colors: ['White/Orange', 'Blue'] },
              { pair: 3, colors: ['White/Blue', 'Orange'] },
              { pair: 4, colors: ['White/Brown', 'Brown'] }
            ]
          },
          t568b: {
            name: 'T-568B Standard',
            pairs: [
              { pair: 1, colors: ['White/Orange', 'Orange'] },
              { pair: 2, colors: ['White/Green', 'Blue'] },
              { pair: 3, colors: ['White/Blue', 'Green'] },
              { pair: 4, colors: ['White/Brown', 'Brown'] }
            ]
          }
        },
        crimpingSteps: [
          'Strip cable jacket to expose 4 twisted pairs',
          'Untwist pairs and arrange according to T-568A standard',
          'Trim wires to uniform length',
          'Insert wires into RJ45 connector',
          'Crimp connector using crimping tool',
          'Test cable with LAN tester'
        ]
      }
    },
    {
      id: 'module3',
      title: 'Static IP Configuration',
      description: 'Configure static IP addresses for server, laptop, and desktop computers',
      duration: '8 hours',
      videoUrl: 'https://www.youtube.com/watch?v=zZ02fvBXNAI',
      topics: ['Static IP Configuration', 'Network Settings', 'Firewall Configuration', 'Network Sharing', 'Connectivity Testing'],
      isAssessmentTask: true,
      taskNumber: 1,
      practiceContent: {
        title: 'Static IP Configuration and Network Setup',
        type: 'B',
        objectives: 'Configure static IP addresses for multiple devices and establish network connectivity',
        materials: ['Server computer', 'Laptop computer', 'Desktop computer', 'Network cables', 'Router/switch'],
        procedures: [
          'Configure static IP addresses for all devices',
          'Set up firewall settings',
          'Configure network and sharing settings',
          'Enable required services',
          'Test network connectivity between devices'
        ],
        staticIPConfiguration: {
          title: 'Static IP Address Configuration',
          description: 'Configure static IP addresses for server, laptop, and desktop',
          devices: [
            {
              name: 'Server',
              ip: '10.0.0.100',
              subnetMask: '255.255.255.0',
              gateway: '10.0.0.1'
            },
            {
              name: 'Laptop',
              ip: '10.0.0.101',
              subnetMask: '255.255.255.0',
              gateway: '10.0.0.1'
            },
            {
              name: 'Desktop',
              ip: '10.0.0.102',
              subnetMask: '255.255.255.0',
              gateway: '10.0.0.1'
            }
          ],
          steps: [
            'Press Windows + R and type "ncpa.cpl" and press enter',
            'Select "Ethernet", "Properties", select "Internet Protocol Version 4 (TCP/IPv4)", "Properties"',
            'Check "Use the following IP Address" and enter the assigned IP',
            'Click "Ok" to save settings'
          ]
        },
        firewallConfiguration: {
          title: 'Firewall Configuration',
          description: 'Configure Windows Defender Firewall settings',
          steps: [
            'Press Windows + R and type "control firewall.cpl" and press enter',
            'Turn "off" Windows Defender Firewall for private, public and domain networks',
            'Click "Ok" to save changes'
          ]
        },
        networkSharing: {
          title: 'Network and Sharing Configuration',
          description: 'Configure network discovery and file sharing settings',
          steps: [
            'Press Windows + R and type "control.exe /name Microsoft.NetworkAndSharingCenter"',
            'Click Network and Sharing Center',
            'Turn on network discovery',
            'Turn on file and network sharing',
            'Turn off password protected sharing',
            'Click Save Changes'
          ]
        },
        servicesConfiguration: {
          title: 'Required Services Configuration',
          description: 'Configure and start required network services',
          steps: [
            'Press Windows + R and type "services.msc"',
            'Right-click each service, change startup type to automatic and start/restart:',
            '• Functional Discovery Resource Publication',
            '• SSDP Discovery',
            '• UPnP Device Host'
          ]
        },
        connectivityTesting: {
          title: 'Network Connectivity Testing',
          description: 'Test connectivity between all devices using ping command',
          steps: [
            'Press Windows + R and type "cmd" and press enter',
            'Type "ping" command followed by IP address of other computers',
            'Example: ping 10.0.0.101 -t',
            'Test connectivity between all devices in the network'
          ]
        }
      }
    },
    {
      id: 'module4',
      title: 'Dynamic IP and Wireless Configuration',
      description: 'Configure dynamic IP addressing and wireless network settings',
      duration: '6 hours',
      videoUrl: 'https://www.youtube.com/watch?v=AMXIE5c5sv8&t=1s',
      topics: ['Router Configuration', 'Wireless Settings', 'Dynamic IP', 'Network Security', 'Connectivity Testing'],
      isAssessmentTask: true,
      taskNumber: 2,
      practiceContent: {
        title: 'Dynamic IP and Wireless Network Configuration',
        type: 'B',
        objectives: 'Configure network router, wireless settings, and dynamic IP addressing',
        materials: ['Network router', 'Computer system', 'LAN cable', 'Web browser', 'Network configuration tools'],
        procedures: [
          'Configure network router settings',
          'Set up wireless network name and security',
          'Configure dynamic IP addressing',
          'Set up firewall and network sharing',
          'Test wireless connectivity'
        ],
        routerConfiguration: {
          title: 'Network Router Configuration',
          description: 'Access and configure network router settings',
          accessSteps: [
            'Turn ON network router and connect to computer via LAN cable',
            'Hold and press the RESET button for 5 seconds until power LED indicator is blinking',
            'Check gateway IP: Press Windows + R, type "ncpa.cpl", right-click Ethernet, click Status, click Details, look for IPv4 Default Gateway',
            'Access router via web browser by typing the default IP/Gateway (e.g., 192.168.0.1)',
            'Fill default username and password (e.g., admin, admin) and click login'
          ]
        },
        wirelessSettings: {
          title: 'Wireless Network Settings',
          description: 'Configure wireless network name and security settings',
          steps: [
            'Go to Wireless Menu, change Wireless Network Name (e.g., Lastname.Firstname)',
            'Go to Wireless Security, under WPA/WPA2, change Wireless Password (e.g., 123456789)',
            'Save wireless configuration settings'
          ]
        },
        dynamicIPConfiguration: {
          title: 'Dynamic IP Address Configuration',
          description: 'Configure devices to obtain IP addresses automatically',
          steps: [
            'Press Windows + R and type "ncpa.cpl" and press enter',
            'Select "Ethernet", "Properties", select "Internet Protocol Version 4 (TCP/IPv4)", "Properties"',
            'Check "Obtain an IP Address Automatically"',
            'Check "Obtain the following DNS address automatically"',
            'Click "Ok" to save settings'
          ]
        },
        firewallConfiguration: {
          title: 'Firewall Configuration',
          description: 'Configure Windows Defender Firewall for wireless network',
          steps: [
            'Press Windows + R and type "control firewall.cpl" and press enter',
            'Turn "off" Windows Defender Firewall for private, public and domain networks',
            'Click "Ok" to save changes'
          ]
        },
        networkSharing: {
          title: 'Network and Sharing Configuration',
          description: 'Configure network discovery and file sharing for wireless network',
          steps: [
            'Press Windows + R and type "control.exe /name Microsoft.NetworkAndSharingCenter"',
            'Click Network and Sharing Center',
            'Turn on network discovery',
            'Turn on file and network sharing',
            'Turn off password protected sharing',
            'Click Save Changes'
          ]
        },
        servicesConfiguration: {
          title: 'Required Services Configuration',
          description: 'Configure and start required network services for wireless connectivity',
          steps: [
            'Press Windows + R and type "services.msc"',
            'Right-click each service, change startup type to automatic and start/restart:',
            '• Functional Discovery Resource Publication',
            '• SSDP Discovery',
            '• UPnP Device Host'
          ]
        },
        connectivityTesting: {
          title: 'Network Connectivity Testing',
          description: 'Test connectivity between all devices using ping command',
          steps: [
            'Press Windows + R and type "cmd" and press enter',
            'Type "ping" command followed by IP address of other computers',
            'Example: ping 192.168.xx.xxx -t',
            'Test connectivity between all devices in the wireless network'
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
            Structured learning modules covering all aspects of computer network setup and configuration.
          </p>
          
          {/* Assessment Tasks Notice */}
          <div className="mt-6 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-4 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
              <h3 className="text-lg font-semibold text-amber-800">Core Assessment Tasks</h3>
            </div>
            <p className="text-amber-700 text-sm">
              <strong>Task 1:</strong> Static IP Configuration (Module 3) | 
              <strong> Task 2:</strong> Dynamic IP & Wireless Configuration (Module 4)
            </p>
            <p className="text-amber-700 text-xs mt-1">
              These modules will be thoroughly assessed hands-on during your TESDA evaluation.
            </p>
          </div>
        </div>
        
        <div className="space-y-6">
          {modules.map((module, index) => (
            <div 
              key={module.id} 
              className={`rounded-lg p-6 shadow-md transition-all duration-300 ${
                module.isAssessmentTask 
                  ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 shadow-lg' 
                  : 'bg-white'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1 mb-4 lg:mb-0">
                  <div className="flex items-center mb-3">
                    {module.isAssessmentTask ? (
                      <div className="flex items-center space-x-3">
                        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mr-2">
                          <Award className="h-5 w-5" />
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                            TASK {module.taskNumber}
                          </span>
                          <h3 className="text-xl font-semibold text-gray-900">{module.title}</h3>
                        </div>
                      </div>
                    ) : (
                      <>
                        <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">
                          {index + 1}
                        </span>
                        <h3 className="text-xl font-semibold text-gray-900">{module.title}</h3>
                      </>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4">{module.description}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Clock className="h-4 w-4 mr-1" />
                    {module.duration}
                  </div>
                  <div className="grid md:grid-cols-2 gap-2">
                    {module.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center text-sm text-gray-600">
                        <ChevronRight className="h-3 w-3 mr-2 text-green-500" />
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
                    className={`px-4 py-2 rounded-lg transition-colors flex items-center justify-center ${
                      module.isAssessmentTask 
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700' 
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
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
                        <div className="flex items-center space-x-3">
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 pr-2">{module.practiceContent?.title}</h3>
                          {module.isAssessmentTask && (
                            <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                              TASK {module.taskNumber}
                            </span>
                          )}
                        </div>
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
                          <div className="bg-green-50 rounded-lg p-4">
                            <h4 className="font-semibold text-green-900 mb-2">Objectives:</h4>
                            <p className="text-green-800">{module.practiceContent.objectives}</p>
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

                          {/* Network Types for Module 1 */}
                          {module.id === 'module1' && module.practiceContent.networkTypes && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Network Types:</h4>
                              <div className="grid md:grid-cols-2 gap-4">
                                {module.practiceContent.networkTypes.map((type, idx) => (
                                  <div key={idx} className="bg-blue-50 rounded-lg p-4">
                                    <h5 className="font-semibold text-blue-900 mb-2">{type.name}</h5>
                                    <p className="text-blue-800 text-sm mb-3">{type.description}</p>
                                    <div>
                                      <span className="text-xs font-medium text-blue-900">Examples:</span>
                                      <ul className="text-xs text-blue-800 mt-1">
                                        {type.examples.map((example, exampleIdx) => (
                                          <li key={exampleIdx}>• {example}</li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Topology Types for Module 1 */}
                          {module.id === 'module1' && module.practiceContent.topologyTypes && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Network Topologies:</h4>
                              <div className="grid md:grid-cols-2 gap-4">
                                {module.practiceContent.topologyTypes.map((topology, idx) => (
                                  <div key={idx} className="bg-purple-50 rounded-lg p-4">
                                    <h5 className="font-semibold text-purple-900 mb-2">{topology.name}</h5>
                                    <p className="text-purple-800 text-sm mb-3">{topology.description}</p>
                                    <div className="mb-3">
                                      <span className="text-xs font-medium text-purple-900">Advantages:</span>
                                      <ul className="text-xs text-purple-800 mt-1">
                                        {topology.advantages.map((adv, advIdx) => (
                                          <li key={advIdx}>• {adv}</li>
                                        ))}
                                      </ul>
                                    </div>
                                    <div>
                                      <span className="text-xs font-medium text-purple-900">Disadvantages:</span>
                                      <ul className="text-xs text-purple-800 mt-1">
                                        {topology.disadvantages.map((dis, disIdx) => (
                                          <li key={disIdx}>• {dis}</li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Cable Types for Module 2 */}
                          {module.id === 'module2' && module.practiceContent.cableTypes && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Cable Types:</h4>
                              <div className="grid md:grid-cols-2 gap-4">
                                {module.practiceContent.cableTypes.map((cable, idx) => (
                                  <div key={idx} className="bg-orange-50 rounded-lg p-4">
                                    <h5 className="font-semibold text-orange-900 mb-2">{cable.name}</h5>
                                    <p className="text-orange-800 text-sm mb-3">{cable.description}</p>
                                    {cable.categories && (
                                      <div className="mb-3">
                                        <span className="text-xs font-medium text-orange-900">Categories:</span>
                                        <ul className="text-xs text-orange-800 mt-1">
                                          {cable.categories.map((cat, catIdx) => (
                                            <li key={catIdx}>• {cat}</li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                    {cable.uses && (
                                      <div className="mb-3">
                                        <span className="text-xs font-medium text-orange-900">Uses:</span>
                                        <ul className="text-xs text-orange-800 mt-1">
                                          {cable.uses.map((use, useIdx) => (
                                            <li key={useIdx}>• {use}</li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                    {cable.advantages && (
                                      <div className="mb-3">
                                        <span className="text-xs font-medium text-orange-900">Advantages:</span>
                                        <ul className="text-xs text-orange-800 mt-1">
                                          {cable.advantages.map((adv, advIdx) => (
                                            <li key={advIdx}>• {adv}</li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                    {cable.disadvantages && (
                                      <div>
                                        <span className="text-xs font-medium text-orange-900">Disadvantages:</span>
                                        <ul className="text-xs text-orange-800 mt-1">
                                          {cable.disadvantages.map((dis, disIdx) => (
                                            <li key={disIdx}>• {dis}</li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Color Coding for Module 2 */}
                          {module.id === 'module2' && module.practiceContent.colorCoding && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Color Coding Standards:</h4>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-yellow-50 rounded-lg p-4">
                                  <h5 className="font-semibold text-yellow-900 mb-2">{module.practiceContent.colorCoding.t568a.name}</h5>
                                  <div className="space-y-2">
                                    {module.practiceContent.colorCoding.t568a.pairs.map((pair, idx) => (
                                      <div key={idx} className="text-sm">
                                        <span className="font-medium text-yellow-900">Pair {pair.pair}:</span>
                                        <div className="text-yellow-800">
                                          {pair.colors.map((color, colorIdx) => (
                                            <div key={colorIdx} className="ml-2">• {color}</div>
                                          ))}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                <div className="bg-green-50 rounded-lg p-4">
                                  <h5 className="font-semibold text-green-900 mb-2">{module.practiceContent.colorCoding.t568b.name}</h5>
                                  <div className="space-y-2">
                                    {module.practiceContent.colorCoding.t568b.pairs.map((pair, idx) => (
                                      <div key={idx} className="text-sm">
                                        <span className="font-medium text-green-900">Pair {pair.pair}:</span>
                                        <div className="text-green-800">
                                          {pair.colors.map((color, colorIdx) => (
                                            <div key={colorIdx} className="ml-2">• {color}</div>
                                          ))}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Crimping Steps for Module 2 */}
                          {module.id === 'module2' && module.practiceContent.crimpingSteps && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Crimping Steps:</h4>
                              <div className="bg-blue-50 rounded-lg p-4">
                                <ol className="list-decimal list-inside space-y-2 text-blue-800">
                                  {module.practiceContent.crimpingSteps.map((step, idx) => (
                                    <li key={idx}>{step}</li>
                                  ))}
                                </ol>
                              </div>
                            </div>
                          )}

                          {/* Static IP Configuration for Module 3 */}
                          {module.id === 'module3' && module.practiceContent.staticIPConfiguration && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Static IP Configuration:</h4>
                              <div className="bg-blue-50 rounded-lg p-4">
                                <h5 className="font-semibold text-blue-900 mb-2">{module.practiceContent.staticIPConfiguration.title}</h5>
                                <p className="text-blue-800 mb-3">{module.practiceContent.staticIPConfiguration.description}</p>
                                <div className="mb-4">
                                  <span className="text-sm font-medium text-blue-900">Device IP Addresses:</span>
                                  <div className="grid md:grid-cols-3 gap-2 mt-2">
                                    {module.practiceContent.staticIPConfiguration.devices.map((device, idx) => (
                                      <div key={idx} className="bg-white rounded p-2 text-xs">
                                        <div className="font-medium text-blue-900">{device.name}</div>
                                        <div className="text-blue-800">IP: {device.ip}</div>
                                        <div className="text-blue-800">Subnet: {device.subnetMask}</div>
                                        <div className="text-blue-800">Gateway: {device.gateway}</div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                <div>
                                  <span className="text-sm font-medium text-blue-900">Configuration Steps:</span>
                                  <ol className="text-sm text-blue-800 mt-1 space-y-1 list-decimal list-inside">
                                    {module.practiceContent.staticIPConfiguration.steps.map((step, idx) => (
                                      <li key={idx}>{step}</li>
                                    ))}
                                  </ol>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Firewall Configuration for Module 3 */}
                          {module.id === 'module3' && module.practiceContent.firewallConfiguration && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Firewall Configuration:</h4>
                              <div className="bg-red-50 rounded-lg p-4">
                                <h5 className="font-semibold text-red-900 mb-2">{module.practiceContent.firewallConfiguration.title}</h5>
                                <p className="text-red-800 mb-3">{module.practiceContent.firewallConfiguration.description}</p>
                                <ol className="list-decimal list-inside space-y-2 text-red-800">
                                  {module.practiceContent.firewallConfiguration.steps.map((step, idx) => (
                                    <li key={idx}>{step}</li>
                                  ))}
                                </ol>
                              </div>
                            </div>
                          )}

                          {/* Network Sharing for Module 3 */}
                          {module.id === 'module3' && module.practiceContent.networkSharing && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Network and Sharing Configuration:</h4>
                              <div className="bg-green-50 rounded-lg p-4">
                                <h5 className="font-semibold text-green-900 mb-2">{module.practiceContent.networkSharing.title}</h5>
                                <p className="text-green-800 mb-3">{module.practiceContent.networkSharing.description}</p>
                                <ol className="list-decimal list-inside space-y-2 text-green-800">
                                  {module.practiceContent.networkSharing.steps.map((step, idx) => (
                                    <li key={idx}>{step}</li>
                                  ))}
                                </ol>
                              </div>
                            </div>
                          )}

                          {/* Services Configuration for Module 3 */}
                          {module.id === 'module3' && module.practiceContent.servicesConfiguration && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Required Services Configuration:</h4>
                              <div className="bg-purple-50 rounded-lg p-4">
                                <h5 className="font-semibold text-purple-900 mb-2">{module.practiceContent.servicesConfiguration.title}</h5>
                                <p className="text-purple-800 mb-3">{module.practiceContent.servicesConfiguration.description}</p>
                                <ol className="list-decimal list-inside space-y-2 text-purple-800">
                                  {module.practiceContent.servicesConfiguration.steps.map((step, idx) => (
                                    <li key={idx}>{step}</li>
                                  ))}
                                </ol>
                              </div>
                            </div>
                          )}

                          {/* Connectivity Testing for Module 3 */}
                          {module.id === 'module3' && module.practiceContent.connectivityTesting && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Network Connectivity Testing:</h4>
                              <div className="bg-yellow-50 rounded-lg p-4">
                                <h5 className="font-semibold text-yellow-900 mb-2">{module.practiceContent.connectivityTesting.title}</h5>
                                <p className="text-yellow-800 mb-3">{module.practiceContent.connectivityTesting.description}</p>
                                <ol className="list-decimal list-inside space-y-2 text-yellow-800">
                                  {module.practiceContent.connectivityTesting.steps.map((step, idx) => (
                                    <li key={idx}>{step}</li>
                                  ))}
                                </ol>
                              </div>
                            </div>
                          )}

                          {/* Router Configuration for Module 4 */}
                          {module.id === 'module4' && module.practiceContent.routerConfiguration && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Network Router Configuration:</h4>
                              <div className="bg-blue-50 rounded-lg p-4">
                                <h5 className="font-semibold text-blue-900 mb-2">{module.practiceContent.routerConfiguration.title}</h5>
                                <p className="text-blue-800 mb-3">{module.practiceContent.routerConfiguration.description}</p>
                                <ol className="list-decimal list-inside space-y-2 text-blue-800">
                                  {module.practiceContent.routerConfiguration.accessSteps.map((step, idx) => (
                                    <li key={idx}>{step}</li>
                                  ))}
                                </ol>
                              </div>
                            </div>
                          )}

                          {/* Wireless Settings for Module 4 */}
                          {module.id === 'module4' && module.practiceContent.wirelessSettings && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Wireless Network Settings:</h4>
                              <div className="bg-green-50 rounded-lg p-4">
                                <h5 className="font-semibold text-green-900 mb-2">{module.practiceContent.wirelessSettings.title}</h5>
                                <p className="text-green-800 mb-3">{module.practiceContent.wirelessSettings.description}</p>
                                <ol className="list-decimal list-inside space-y-2 text-green-800">
                                  {module.practiceContent.wirelessSettings.steps.map((step, idx) => (
                                    <li key={idx}>{step}</li>
                                  ))}
                                </ol>
                              </div>
                            </div>
                          )}

                          {/* Dynamic IP Configuration for Module 4 */}
                          {module.id === 'module4' && module.practiceContent.dynamicIPConfiguration && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Dynamic IP Address Configuration:</h4>
                              <div className="bg-purple-50 rounded-lg p-4">
                                <h5 className="font-semibold text-purple-900 mb-2">{module.practiceContent.dynamicIPConfiguration.title}</h5>
                                <p className="text-purple-800 mb-3">{module.practiceContent.dynamicIPConfiguration.description}</p>
                                <ol className="list-decimal list-inside space-y-2 text-purple-800">
                                  {module.practiceContent.dynamicIPConfiguration.steps.map((step, idx) => (
                                    <li key={idx}>{step}</li>
                                  ))}
                                </ol>
                              </div>
                            </div>
                          )}

                          {/* Firewall Configuration for Module 4 */}
                          {module.id === 'module4' && module.practiceContent.firewallConfiguration && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Firewall Configuration:</h4>
                              <div className="bg-red-50 rounded-lg p-4">
                                <h5 className="font-semibold text-red-900 mb-2">{module.practiceContent.firewallConfiguration.title}</h5>
                                <p className="text-red-800 mb-3">{module.practiceContent.firewallConfiguration.description}</p>
                                <ol className="list-decimal list-inside space-y-2 text-red-800">
                                  {module.practiceContent.firewallConfiguration.steps.map((step, idx) => (
                                    <li key={idx}>{step}</li>
                                  ))}
                                </ol>
                              </div>
                            </div>
                          )}

                          {/* Network Sharing for Module 4 */}
                          {module.id === 'module4' && module.practiceContent.networkSharing && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Network and Sharing Configuration:</h4>
                              <div className="bg-green-50 rounded-lg p-4">
                                <h5 className="font-semibold text-green-900 mb-2">{module.practiceContent.networkSharing.title}</h5>
                                <p className="text-green-800 mb-3">{module.practiceContent.networkSharing.description}</p>
                                <ol className="list-decimal list-inside space-y-2 text-green-800">
                                  {module.practiceContent.networkSharing.steps.map((step, idx) => (
                                    <li key={idx}>{step}</li>
                                  ))}
                                </ol>
                              </div>
                            </div>
                          )}

                          {/* Services Configuration for Module 4 */}
                          {module.id === 'module4' && module.practiceContent.servicesConfiguration && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Required Services Configuration:</h4>
                              <div className="bg-purple-50 rounded-lg p-4">
                                <h5 className="font-semibold text-purple-900 mb-2">{module.practiceContent.servicesConfiguration.title}</h5>
                                <p className="text-purple-800 mb-3">{module.practiceContent.servicesConfiguration.description}</p>
                                <ol className="list-decimal list-inside space-y-2 text-purple-800">
                                  {module.practiceContent.servicesConfiguration.steps.map((step, idx) => (
                                    <li key={idx}>{step}</li>
                                  ))}
                                </ol>
                              </div>
                            </div>
                          )}

                          {/* Connectivity Testing for Module 4 */}
                          {module.id === 'module4' && module.practiceContent.connectivityTesting && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Network Connectivity Testing:</h4>
                              <div className="bg-yellow-50 rounded-lg p-4">
                                <h5 className="font-semibold text-yellow-900 mb-2">{module.practiceContent.connectivityTesting.title}</h5>
                                <p className="text-yellow-800 mb-3">{module.practiceContent.connectivityTesting.description}</p>
                                <ol className="list-decimal list-inside space-y-2 text-yellow-800">
                                  {module.practiceContent.connectivityTesting.steps.map((step, idx) => (
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
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 