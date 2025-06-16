"use client"

import Link from 'next/link'
import { 
  Network, 
  ArrowLeft, 
  BookOpen, 
  Video, 
  FileText, 
  CheckCircle,
  Clock,
  Users,
  ChevronRight,
  Wifi,
  Cable,
  Server
} from 'lucide-react'
import Footer from '@/components/Footer'

export default function COC2Page() {
  const learningObjectives = [
    'Install and configure network cables',
    'Set up network configuration and IP addressing',
    'Configure routers and wireless access points',
    'Set up Wi-Fi and wireless repeaters',
    'Inspect and test configured networks',
    'Troubleshoot network connectivity issues'
  ]

  const modules = [
    {
      id: 'module1',
      title: 'Network Fundamentals',
      description: 'Understanding computer networks, types, and topology',
      duration: '6 hours',
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
      title: 'IP Addressing and Configuration',
      description: 'IP addressing, subnetting, and network configuration',
      duration: '10 hours',
      topics: ['IPv4/IPv6', 'Static vs Dynamic IP', 'Subnetting', 'Network Configuration'],
      practiceContent: {
        title: 'Network Configuration and IP Addressing',
        type: 'B',
        objectives: 'Set up network configuration and configure IP addressing for network devices',
        materials: ['Computer system', 'Network interface card', 'Router/switch', 'Network cables'],
        procedures: [
          'Configure network interface settings',
          'Set up static IP addressing',
          'Configure subnet mask and gateway',
          'Test network connectivity',
          'Document network configuration'
        ],
        ipAddressing: {
          title: 'IP Addressing System',
          description: 'System for assigning unique addresses to devices on a network',
          ipv4: {
            name: 'IPv4 Address',
            description: '32-bit address divided into 4 octets',
            format: 'xxx.xxx.xxx.xxx (e.g., 192.168.1.1)',
            classes: [
              { class: 'A', range: '1.0.0.1 - 126.255.255.254', defaultMask: '255.0.0.0' },
              { class: 'B', range: '128.1.0.1 - 191.255.255.254', defaultMask: '255.255.0.0' },
              { class: 'C', range: '192.0.1.1 - 223.255.254.254', defaultMask: '255.255.255.0' }
            ]
          },
          ipv6: {
            name: 'IPv6 Address',
            description: '128-bit address for future internet growth',
            format: 'xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx',
            advantages: ['Larger address space', 'Better security', 'Improved routing']
          }
        },
        addressTypes: [
          {
            name: 'Public Address',
            description: 'Globally unique address for internet communication',
            characteristics: ['Assigned by ISP', 'Not free', 'Global scope'],
            examples: ['203.0.113.1', '8.8.8.8']
          },
          {
            name: 'Private Address',
            description: 'Address used within local networks',
            characteristics: ['Free to use', 'Local scope', 'Not routable on internet'],
            ranges: ['10.0.0.0/8', '172.16.0.0/12', '192.168.0.0/16']
          }
        ],
        configurationSteps: [
          'Open Network Connections (ncpa.cpl)',
          'Right-click network adapter and select Properties',
          'Select Internet Protocol Version 4 (TCP/IPv4)',
          'Click Properties and select "Use the following IP address"',
          'Enter IP address, subnet mask, and default gateway',
          'Enter preferred and alternate DNS servers',
          'Click OK to save settings'
        ]
      }
    },
    {
      id: 'module4',
      title: 'Router and Wireless Setup',
      description: 'Configuring routers, Wi-Fi, and wireless access points',
      duration: '8 hours',
      topics: ['Router Configuration', 'Wi-Fi Setup', 'Access Points', 'Network Security'],
      practiceContent: {
        title: 'Router and Wireless Configuration',
        type: 'B',
        objectives: 'Configure routers and wireless access points for network connectivity',
        materials: ['Router', 'Wireless access point', 'Computer system', 'Network cables'],
        procedures: [
          'Connect router to internet source',
          'Access router configuration interface',
          'Configure basic network settings',
          'Set up wireless network',
          'Configure security settings',
          'Test wireless connectivity'
        ],
        routerSetup: [
          'Connect router to modem using Ethernet cable',
          'Power on router and wait for initialization',
          'Access router admin interface (usually 192.168.1.1 or 192.168.0.1)',
          'Login with default credentials (check router manual)',
          'Configure WAN settings for internet connection',
          'Set up LAN network settings',
          'Configure DHCP server settings',
          'Set up wireless network name (SSID)',
          'Configure wireless security (WPA2/WPA3)',
          'Save settings and restart router'
        ],
        wirelessSecurity: [
          {
            name: 'WPA2 (Wi-Fi Protected Access 2)',
            description: 'Strong encryption for wireless networks',
            advantages: ['High security', 'Widely supported'],
            setup: 'Choose WPA2-PSK and set strong password'
          },
          {
            name: 'WPA3 (Wi-Fi Protected Access 3)',
            description: 'Latest wireless security standard',
            advantages: ['Enhanced security', 'Future-proof'],
            setup: 'Choose WPA3-SAE if supported by devices'
          }
        ]
      }
    }
  ]

  const networkTypes = [
    {
      name: 'Local Area Networks (LAN)',
      description: 'Connects computers within a limited area like school, office, or home',
      icon: Network
    },
    {
      name: 'Wide Area Networks (WAN)',
      description: 'Covers larger geographical areas with radius of more than a kilometer',
      icon: Network
    },
    {
      name: 'Personal Area Networks (PAN)',
      description: 'Based on individual workspace with device as network center',
      icon: Wifi
    },
    {
      name: 'Metropolitan Area Networks (MAN)',
      description: 'Stretches across metropolitan areas connecting multiple LANs',
      icon: Network
    }
  ]

  const networkComponents = [
    {
      name: 'Network Interface Card (NIC)',
      description: 'Hardware component to connect computers to network',
      features: ['10/100/1000 Mb/s transfer rate', 'MAC address encoding', 'Wired and wireless types']
    },
    {
      name: 'Switch',
      description: 'Advanced network device that connects multiple devices',
      features: ['Direct connection between source and destination', 'Increased network speed', 'Updated routing table']
    },
    {
      name: 'Router',
      description: 'Connects LAN with internet and forwards packets',
      features: ['Layer 3 operation', 'Security and reliability', 'Traffic load balancing']
    },
    {
      name: 'Patch Panel',
      description: 'Hardware with multiple ports to organize cable groups',
      features: ['Scalability', 'Reduces cable clutter', 'Easier maintenance']
    }
  ]

  const assessmentCriteria = [
    'Proper cable crimping and color coding',
    'Correct network configuration setup',
    'Successful router and Wi-Fi configuration',
    'Network connectivity testing',
    'Troubleshooting network issues',
    'Documentation and reporting'
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
              <Link href="/coc1" className="text-gray-600 hover:text-gray-900">COC 1</Link>
              <Link href="/coc3" className="text-gray-600 hover:text-gray-900">COC 3</Link>
              <Link href="/coc4" className="text-gray-600 hover:text-gray-900">COC 4</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center mb-6">
            <Network className="h-12 w-12 mr-4" />
            <div>
              <h1 className="text-4xl font-bold">COC 2: Setting up Computer Networks</h1>
              <p className="text-xl opacity-90">Wired and Wireless Network Configuration</p>
            </div>
          </div>
          <p className="text-lg max-w-3xl">
            This module covers setting up computer networks for LANs and SOHO systems. 
            You will learn to install network cables, configure network settings, set up routers 
            and wireless access points, and test network connectivity.
          </p>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Duration</h3>
              <p className="text-gray-600">32 Hours</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Prerequisites</h3>
              <p className="text-gray-600">Intro to CSS + COC 1</p>
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

      {/* Network Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Networks</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding different network types and their applications in various environments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {networkTypes.map((network, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <network.icon className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{network.name}</h3>
                </div>
                <p className="text-gray-600">{network.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Components */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Network Components</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Essential hardware components required for network installation and configuration.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {networkComponents.map((component, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-green-600 p-6">
                  <h3 className="text-xl font-semibold text-white">{component.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{component.description}</p>
                  <ul className="space-y-2">
                    {component.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <ChevronRight className="h-3 w-3 mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
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
              Structured learning modules covering all aspects of network setup and configuration.
            </p>
          </div>
          
          <div className="space-y-6">
            {modules.map((module, index) => (
              <div key={module.id} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
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
                  <div className="ml-6 flex space-x-2">
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center">
                      <Video className="h-4 w-4 mr-2" />
                      Watch
                    </button>
                    <button 
                      onClick={() => {
                        const modal = document.getElementById(`practice-modal-${module.id}`);
                        if (modal) modal.classList.remove('hidden');
                      }}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      Practice
                    </button>
                  </div>
                </div>

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
                                {module.practiceContent.networkTypes.map((network, idx) => (
                                  <div key={idx} className="bg-gray-50 rounded-lg p-4">
                                    <h5 className="font-semibold text-gray-900 mb-2">{network.name}</h5>
                                    <p className="text-sm text-gray-600 mb-2">{network.description}</p>
                                    <div>
                                      <span className="text-xs font-medium text-gray-500">Examples:</span>
                                      <ul className="text-xs text-gray-600 mt-1">
                                        {network.examples.map((example, exampleIdx) => (
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
                              <h4 className="font-semibold text-gray-900 mb-3">Network Topology Types:</h4>
                              <div className="grid md:grid-cols-2 gap-4">
                                {module.practiceContent.topologyTypes.map((topology, idx) => (
                                  <div key={idx} className="bg-blue-50 rounded-lg p-4">
                                    <h5 className="font-semibold text-blue-900 mb-2">{topology.name}</h5>
                                    <p className="text-sm text-blue-800 mb-3">{topology.description}</p>
                                    <div className="grid grid-cols-2 gap-3">
                                      <div>
                                        <span className="text-xs font-medium text-blue-700">Advantages:</span>
                                        <ul className="text-xs text-blue-600 mt-1">
                                          {topology.advantages.map((adv, advIdx) => (
                                            <li key={advIdx}>• {adv}</li>
                                          ))}
                                        </ul>
                                      </div>
                                      <div>
                                        <span className="text-xs font-medium text-blue-700">Disadvantages:</span>
                                        <ul className="text-xs text-blue-600 mt-1">
                                          {topology.disadvantages.map((dis, disIdx) => (
                                            <li key={disIdx}>• {dis}</li>
                                          ))}
                                        </ul>
                                      </div>
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
                                  <div key={idx} className="bg-gray-50 rounded-lg p-4">
                                    <h5 className="font-semibold text-gray-900 mb-2">{cable.name}</h5>
                                    <p className="text-sm text-gray-600 mb-2">{cable.description}</p>
                                    {cable.categories && (
                                      <div className="mb-2">
                                        <span className="text-xs font-medium text-gray-500">Categories:</span>
                                        <p className="text-xs text-gray-600 mt-1">{cable.categories.join(', ')}</p>
                                      </div>
                                    )}
                                    {cable.uses && (
                                      <div className="mb-2">
                                        <span className="text-xs font-medium text-gray-500">Uses:</span>
                                        <ul className="text-xs text-gray-600 mt-1">
                                          {cable.uses.map((use, useIdx) => (
                                            <li key={useIdx}>• {use}</li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                    {cable.advantages && (
                                      <div className="mb-2">
                                        <span className="text-xs font-medium text-gray-500">Advantages:</span>
                                        <ul className="text-xs text-gray-600 mt-1">
                                          {cable.advantages.map((adv, advIdx) => (
                                            <li key={advIdx}>• {adv}</li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                    {cable.disadvantages && (
                                      <div>
                                        <span className="text-xs font-medium text-gray-500">Disadvantages:</span>
                                        <ul className="text-xs text-gray-600 mt-1">
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
                              <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-yellow-50 rounded-lg p-4">
                                  <h5 className="font-semibold text-yellow-900 mb-3">{module.practiceContent.colorCoding.t568a.name}</h5>
                                  <div className="space-y-2">
                                    {module.practiceContent.colorCoding.t568a.pairs.map((pair, idx) => (
                                      <div key={idx} className="flex items-center text-sm">
                                        <span className="font-medium text-yellow-800 mr-2">Pair {pair.pair}:</span>
                                        <span className="text-yellow-700">{pair.colors.join(' - ')}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                <div className="bg-blue-50 rounded-lg p-4">
                                  <h5 className="font-semibold text-blue-900 mb-3">{module.practiceContent.colorCoding.t568b.name}</h5>
                                  <div className="space-y-2">
                                    {module.practiceContent.colorCoding.t568b.pairs.map((pair, idx) => (
                                      <div key={idx} className="flex items-center text-sm">
                                        <span className="font-medium text-blue-800 mr-2">Pair {pair.pair}:</span>
                                        <span className="text-blue-700">{pair.colors.join(' - ')}</span>
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
                              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                {module.practiceContent.crimpingSteps.map((step, idx) => (
                                  <li key={idx}>{step}</li>
                                ))}
                              </ol>
                            </div>
                          )}

                          {/* IP Addressing for Module 3 */}
                          {module.id === 'module3' && module.practiceContent.ipAddressing && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">IP Addressing System:</h4>
                              <div className="bg-purple-50 rounded-lg p-4">
                                <h5 className="font-semibold text-purple-900 mb-2">{module.practiceContent.ipAddressing.title}</h5>
                                <p className="text-purple-800 mb-4">{module.practiceContent.ipAddressing.description}</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                  <div>
                                    <h6 className="font-medium text-purple-900 mb-2">{module.practiceContent.ipAddressing.ipv4.name}</h6>
                                    <p className="text-sm text-purple-800 mb-2">{module.practiceContent.ipAddressing.ipv4.description}</p>
                                    <p className="text-sm text-purple-700 mb-2">Format: {module.practiceContent.ipAddressing.ipv4.format}</p>
                                    <div>
                                      <span className="text-xs font-medium text-purple-700">Classes:</span>
                                      <ul className="text-xs text-purple-600 mt-1">
                                        {module.practiceContent.ipAddressing.ipv4.classes.map((cls, clsIdx) => (
                                          <li key={clsIdx}>• Class {cls.class}: {cls.range} (Mask: {cls.defaultMask})</li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                  <div>
                                    <h6 className="font-medium text-purple-900 mb-2">{module.practiceContent.ipAddressing.ipv6.name}</h6>
                                    <p className="text-sm text-purple-800 mb-2">{module.practiceContent.ipAddressing.ipv6.description}</p>
                                    <p className="text-sm text-purple-700 mb-2">Format: {module.practiceContent.ipAddressing.ipv6.format}</p>
                                    <div>
                                      <span className="text-xs font-medium text-purple-700">Advantages:</span>
                                      <ul className="text-xs text-purple-600 mt-1">
                                        {module.practiceContent.ipAddressing.ipv6.advantages.map((adv, advIdx) => (
                                          <li key={advIdx}>• {adv}</li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Address Types for Module 3 */}
                          {module.id === 'module3' && module.practiceContent.addressTypes && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Address Types:</h4>
                              <div className="grid md:grid-cols-2 gap-4">
                                {module.practiceContent.addressTypes.map((addrType, idx) => (
                                  <div key={idx} className="bg-gray-50 rounded-lg p-4">
                                    <h5 className="font-semibold text-gray-900 mb-2">{addrType.name}</h5>
                                    <p className="text-sm text-gray-600 mb-2">{addrType.description}</p>
                                    <div className="mb-2">
                                      <span className="text-xs font-medium text-gray-500">Characteristics:</span>
                                      <ul className="text-xs text-gray-600 mt-1">
                                        {addrType.characteristics.map((char, charIdx) => (
                                          <li key={charIdx}>• {char}</li>
                                        ))}
                                      </ul>
                                    </div>
                                    {addrType.examples && (
                                      <div className="mb-2">
                                        <span className="text-xs font-medium text-gray-500">Examples:</span>
                                        <p className="text-xs text-gray-600 mt-1">{addrType.examples.join(', ')}</p>
                                      </div>
                                    )}
                                    {addrType.ranges && (
                                      <div>
                                        <span className="text-xs font-medium text-gray-500">Ranges:</span>
                                        <ul className="text-xs text-gray-600 mt-1">
                                          {addrType.ranges.map((range, rangeIdx) => (
                                            <li key={rangeIdx}>• {range}</li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Configuration Steps for Module 3 */}
                          {module.id === 'module3' && module.practiceContent.configurationSteps && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Configuration Steps:</h4>
                              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                {module.practiceContent.configurationSteps.map((step, idx) => (
                                  <li key={idx}>{step}</li>
                                ))}
                              </ol>
                            </div>
                          )}

                          {/* Router Setup for Module 4 */}
                          {module.id === 'module4' && module.practiceContent.routerSetup && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Router Setup Steps:</h4>
                              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                {module.practiceContent.routerSetup.map((step, idx) => (
                                  <li key={idx}>{step}</li>
                                ))}
                              </ol>
                            </div>
                          )}

                          {/* Wireless Security for Module 4 */}
                          {module.id === 'module4' && module.practiceContent.wirelessSecurity && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Wireless Security:</h4>
                              <div className="grid md:grid-cols-2 gap-4">
                                {module.practiceContent.wirelessSecurity.map((security, idx) => (
                                  <div key={idx} className="bg-green-50 rounded-lg p-4">
                                    <h5 className="font-semibold text-green-900 mb-2">{security.name}</h5>
                                    <p className="text-sm text-green-800 mb-2">{security.description}</p>
                                    <div className="mb-2">
                                      <span className="text-xs font-medium text-green-700">Advantages:</span>
                                      <ul className="text-xs text-green-600 mt-1">
                                        {security.advantages.map((adv, advIdx) => (
                                          <li key={advIdx}>• {adv}</li>
                                        ))}
                                      </ul>
                                    </div>
                                    <div>
                                      <span className="text-xs font-medium text-green-700">Setup:</span>
                                      <p className="text-xs text-green-600 mt-1">{security.setup}</p>
                                    </div>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Topics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Topics Covered</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Essential concepts and practical skills for network setup and configuration.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Cable className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Cable Crimping</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Learn proper UTP cable crimping with T-568A/B color coding standards and testing procedures.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Server className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">IP Addressing</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Master IPv4/IPv6 addressing, subnetting, static vs dynamic IP configuration.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Wifi className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Wireless Setup</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Configure routers, Wi-Fi access points, and wireless repeaters for optimal connectivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Criteria */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Assessment Criteria</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your performance will be evaluated based on the following criteria:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {assessmentCriteria.map((criterion, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-semibold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 font-medium">{criterion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation to Next COC */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready for the Next Step?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Continue your journey with COC 3: Setting up Computer Servers
            </p>
            <Link 
              href="/coc3"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center"
            >
              Continue to COC 3 <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
} 