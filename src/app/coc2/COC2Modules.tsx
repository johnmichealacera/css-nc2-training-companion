"use client"

import { useState, useEffect } from 'react'
import { 
  Video, 
  FileText, 
  Clock,
  ChevronRight
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
      title: 'Network Configuration',
      description: 'IP addressing and network setup',
      duration: '8 hours',
      videoUrl: 'https://www.youtube.com/watch?v=zZ02fvBXNAI',
      topics: ['IP Addressing', 'Subnetting', 'Network Configuration', 'DHCP Setup'],
      practiceContent: {
        title: 'Network Configuration and IP Addressing',
        type: 'B',
        objectives: 'Configure network settings and IP addressing for workstations',
        materials: ['Computer systems', 'Network cables', 'Router/switch', 'Network configuration tools'],
        procedures: [
          'Configure static IP addresses',
          'Set up subnet masks and gateways',
          'Configure DNS settings',
          'Test network connectivity',
          'Troubleshoot connection issues'
        ],
        ipAddressing: {
          title: 'IP Addressing Fundamentals',
          description: 'Understanding IPv4 addressing and subnetting',
          classes: [
            {
              name: 'Class A',
              range: '1.0.0.0 - 126.255.255.255',
              defaultMask: '255.0.0.0',
              use: 'Large networks'
            },
            {
              name: 'Class B',
              range: '128.0.0.0 - 191.255.255.255',
              defaultMask: '255.255.0.0',
              use: 'Medium networks'
            },
            {
              name: 'Class C',
              range: '192.0.0.0 - 223.255.255.255',
              defaultMask: '255.255.255.0',
              use: 'Small networks'
            }
          ],
          privateRanges: [
            '10.0.0.0 - 10.255.255.255',
            '172.16.0.0 - 172.31.255.255',
            '192.168.0.0 - 192.168.255.255'
          ]
        }
      }
    },
    {
      id: 'module4',
      title: 'Wireless Network Setup',
      description: 'Wi-Fi configuration and wireless repeaters',
      duration: '6 hours',
      videoUrl: 'https://www.youtube.com/watch?v=AMXIE5c5sv8&t=1s',
      topics: ['Wi-Fi Standards', 'Wireless Security', 'Access Points', 'Repeaters'],
      practiceContent: {
        title: 'Wireless Network Configuration',
        type: 'B',
        objectives: 'Configure wireless networks and security settings',
        materials: ['Wireless router', 'Access points', 'Network cables', 'Configuration tools'],
        procedures: [
          'Configure wireless router settings',
          'Set up wireless security (WPA2/WPA3)',
          'Configure access points',
          'Set up wireless repeaters',
          'Test wireless connectivity'
        ],
        wirelessStandards: [
          {
            name: '802.11n (Wi-Fi 4)',
            frequency: '2.4 GHz / 5 GHz',
            maxSpeed: '600 Mbps',
            features: ['MIMO', 'Channel bonding']
          },
          {
            name: '802.11ac (Wi-Fi 5)',
            frequency: '5 GHz',
            maxSpeed: '3.5 Gbps',
            features: ['MU-MIMO', 'Beamforming']
          },
          {
            name: '802.11ax (Wi-Fi 6)',
            frequency: '2.4 GHz / 5 GHz',
            maxSpeed: '9.6 Gbps',
            features: ['OFDMA', 'Target Wake Time']
          }
        ],
        securityProtocols: [
          {
            name: 'WEP (Wired Equivalent Privacy)',
            description: 'Old security protocol, not recommended',
            status: 'Deprecated'
          },
          {
            name: 'WPA (Wi-Fi Protected Access)',
            description: 'Improved security over WEP',
            status: 'Legacy'
          },
          {
            name: 'WPA2 (Wi-Fi Protected Access 2)',
            description: 'Current standard, widely used',
            status: 'Recommended'
          },
          {
            name: 'WPA3 (Wi-Fi Protected Access 3)',
            description: 'Latest security standard',
            status: 'Latest'
          }
        ]
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
        </div>
        
        <div className="space-y-6">
          {modules.map((module, index) => (
            <div key={module.id} className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1 mb-4 lg:mb-0">
                  <div className="flex items-center mb-3">
                    <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">
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

                          {/* IP Addressing for Module 3 */}
                          {module.id === 'module3' && module.practiceContent.ipAddressing && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">IP Addressing Information:</h4>
                              <div className="bg-indigo-50 rounded-lg p-4">
                                <h5 className="font-semibold text-indigo-900 mb-2">{module.practiceContent.ipAddressing.title}</h5>
                                <p className="text-indigo-800 mb-3">{module.practiceContent.ipAddressing.description}</p>
                                <div className="mb-3">
                                  <span className="text-sm font-medium text-indigo-900">IP Classes:</span>
                                  <div className="grid md:grid-cols-3 gap-2 mt-2">
                                    {module.practiceContent.ipAddressing.classes.map((cls, idx) => (
                                      <div key={idx} className="bg-white rounded p-2 text-xs">
                                        <div className="font-medium text-indigo-900">{cls.name}</div>
                                        <div className="text-indigo-800">Range: {cls.range}</div>
                                        <div className="text-indigo-800">Mask: {cls.defaultMask}</div>
                                        <div className="text-indigo-800">Use: {cls.use}</div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                <div>
                                  <span className="text-sm font-medium text-indigo-900">Private IP Ranges:</span>
                                  <ul className="text-sm text-indigo-800 mt-1 space-y-1">
                                    {module.practiceContent.ipAddressing.privateRanges.map((range, idx) => (
                                      <li key={idx}>• {range}</li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Wireless Standards for Module 4 */}
                          {module.id === 'module4' && module.practiceContent.wirelessStandards && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Wireless Standards:</h4>
                              <div className="grid md:grid-cols-3 gap-4">
                                {module.practiceContent.wirelessStandards.map((standard, idx) => (
                                  <div key={idx} className="bg-pink-50 rounded-lg p-4">
                                    <h5 className="font-semibold text-pink-900 mb-2">{standard.name}</h5>
                                    <div className="text-sm text-pink-800 space-y-1">
                                      <div><span className="font-medium">Frequency:</span> {standard.frequency}</div>
                                      <div><span className="font-medium">Max Speed:</span> {standard.maxSpeed}</div>
                                      <div><span className="font-medium">Features:</span></div>
                                      <ul className="ml-2">
                                        {standard.features.map((feature, featureIdx) => (
                                          <li key={featureIdx}>• {feature}</li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Security Protocols for Module 4 */}
                          {module.id === 'module4' && module.practiceContent.securityProtocols && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Security Protocols:</h4>
                              <div className="grid md:grid-cols-2 gap-4">
                                {module.practiceContent.securityProtocols.map((protocol, idx) => (
                                  <div key={idx} className="bg-red-50 rounded-lg p-4">
                                    <h5 className="font-semibold text-red-900 mb-2">{protocol.name}</h5>
                                    <p className="text-red-800 text-sm mb-2">{protocol.description}</p>
                                    <span className={`text-xs px-2 py-1 rounded ${
                                      protocol.status === 'Latest' ? 'bg-green-100 text-green-800' :
                                      protocol.status === 'Recommended' ? 'bg-blue-100 text-blue-800' :
                                      protocol.status === 'Legacy' ? 'bg-yellow-100 text-yellow-800' :
                                      'bg-red-100 text-red-800'
                                    }`}>
                                      {protocol.status}
                                    </span>
                                  </div>
                                ))}
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