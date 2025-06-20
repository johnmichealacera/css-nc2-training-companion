"use client"

import { useState, useEffect } from 'react'
import { 
  Video, 
  FileText, 
  CheckCircle,
  Clock,
  ChevronRight
} from 'lucide-react'

export default function COC3Modules() {
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
      title: 'Local Server Setup & Configuration',
      description: 'Lay the foundation for your server. Learn how to configure your machine for domain readiness.',
      duration: '6 hours',
      topics: ['Set static IP address', 'Rename server computer', 'Configure Windows Firewall', 'Enable Remote Desktop', 'Disk Management Setup'],
      videoUrl: 'https://www.youtube.com/watch?v=2sH6dmVuBG4',
      practiceContent: {
        title: 'Local Server Configuration',
        type: 'A',
        objectives: 'Configure local server with proper network settings, firewall configuration, and basic server setup',
        materials: ['Windows Server', 'Network cables', 'Router/switch', 'Computer system'],
        procedures: [
          'Disable DHCP Server of the AP router first',
          'Configure firewall settings',
          'Enable Remote Desktop Connection',
          'Setup Static IP Configuration',
          'Rename computer to "Server" and restart'
        ],
        firewallSettings: {
          title: 'Firewall Configuration',
          description: 'Allow applications and features through Windows Firewall',
          services: [
            'Netlogon Service',
            'Remote Desktop',
            'Remote Service Management',
            'Windows Firewall Remote Management'
          ]
        },
        networkConfiguration: {
          title: 'Static IP Configuration',
          settings: {
            'IP Address': '10.0.0.5',
            'Subnet Mask': '255.255.255.0',
            'Gateway': '10.0.0.1',
            'Preferred DNS': '10.0.0.5'
          }
        }
      }
    },
    {
      id: 'module2',
      title: 'Installing and Configuring Server Roles',
      description: 'Add and configure roles needed for domain and network services.',
      duration: '8 hours',
      topics: ['Install Active Directory Domain Services (AD DS)', 'Install DNS and DHCP', 'Promote to Domain Controller', 'Setup new forest: bgfccss.com', 'Configure DHCP scope and reverse lookup zones'],
      videoUrl: 'https://www.youtube.com/watch?v=_NT5RdF58Tg',
      practiceContent: {
        title: 'Active Directory and User Management',
        type: 'B',
        objectives: 'Install Active Directory Domain Services, configure DHCP server, and create organizational users',
        materials: ['Windows Server', 'Domain controller', 'DHCP server', 'Active Directory tools'],
        procedures: [
          'Install Active Directory Domain Services',
          'Configure DNS Server',
          'Promote server to Domain Controller',
          'Install and configure DHCP Server',
          'Create organizational units and user accounts'
        ],
        activeDirectorySetup: {
          title: 'Active Directory Domain Services Installation',
          steps: [
            'Click Add roles and features',
            'Select Role-based or feature-based installation',
            'Check and select server or virtual hard disk',
            'Select Active Directory Domain Services and DNS Server',
            'Click Add Features on all roles or features',
            'Click promote on Active Directory Domain Services notification',
            'Select Add New Forest',
            'Set root domain name to "bgfccss.com"',
            'Set password to "Admin@12345" (Use only for training/demo purposes. Do not use in real-world systems.)',
            'Click Install'
          ]
        },
        dhcpConfiguration: {
          title: 'DHCP Server Configuration',
          steps: [
            'Go to Tools, select DHCP',
            'Select and expand IPv4',
            'Right click and select New Scope',
            'Provide scope name: "LAN Scope"',
            'Set IP range: 10.0.0.100 - 10.0.0.120',
            'Set Length: 24',
            'Set Subnet Mask: 255.255.255.0'
          ]
        }
      }
    },
    {
      id: 'module3',
      title: 'Folder Redirection & User Account Management',
      description: 'Create domain users and redirect client folders to the server.',
      duration: '10 hours',
      topics: ['Create Organizational Units', 'Add user accounts (e.g., win10, win11)', 'Share Redirection folder', 'Apply Folder Redirection using Group Policy', 'Test redirection from client machines'],
      videoUrl: 'https://www.youtube.com/watch?v=e9t5_VWlgkA',
      practiceContent: {
        title: 'Group Policy and Folder Redirection',
        type: 'B',
        objectives: 'Configure Group Policy Management, create shared folders, and set up folder redirection',
        materials: ['Windows Server', 'Group Policy Management', 'Shared folders', 'Network path'],
        procedures: [
          'Create folder and configure sharing permissions',
          'Configure Group Policy Object',
          'Set up folder redirection',
          'Update group policy',
          'Test folder redirection configuration'
        ],
        folderSharing: {
          title: 'Folder Sharing and Permissions',
          steps: [
            'On Drive D or DATA, create folder named "Redirection"',
            'Right click folder, select properties, select sharing tab',
            'Click advance sharing, check share this folder',
            'Click permission, under Everyone account, check Full Control',
            'Click apply and OK',
            'Copy Network Path (e.g., \\Server\\FolderName) to notepad'
          ]
        },
        groupPolicy: {
          title: 'Group Policy Object Configuration',
          steps: [
            'Go to Tools, Select Group Policy Management',
            'Expand forest: bgfccss.com',
            'Right click on "Redirection OU", select Create a GPO in this domain',
            'Provide name: "Redirection GPO"',
            'Right click the GPO, select Edit',
            'Select User Configuration, Policies, Windows Settings, Folder Redirection',
            'Select Desktop, right click, select properties',
            'Select Basic-Redirect everyone\'s folder to the same location',
            'Paste network path to Root Path',
            'Perform update policy: gpupdate/force'
          ]
        },
        userCreation: {
          title: 'Organizational User Creation',
          steps: [
            'Go to Tools, select Active Directory Users and Computers',
            'Right click on "bgfccss.com", select New, click Organizational Unit',
            'Name it "Redirection OU"',
            'Under "Redirection OU", create two User accounts:',
            'Username: win10, Password: Admin@123456789 (Use only for training/demo purposes. Do not use in real-world systems.)',
            'Username: win11, Password: Admin@123456789 (Use only for training/demo purposes. Do not use in real-world systems.)'
          ]
        }
      }
    },
    {
      id: 'module4',
      title: 'Remote Desktop Management',
      description: 'Control server and clients remotely using Remote Desktop Connection.',
      duration: '6 hours',
      topics: ['Enable Remote Desktop on both server and clients', 'Connect to server from client', 'Remote into client from server', 'Switch between devices smoothly'],
      videoUrl: 'https://www.youtube.com/watch?v=vs1hhH2DfGc',
      practiceContent: {
        title: 'Domain Joining and Remote Desktop',
        type: 'B',
        objectives: 'Join computers to domain, configure network settings, and test remote desktop connections',
        materials: ['Desktop computer', 'Laptop computer', 'Domain credentials', 'Network configuration'],
        procedures: [
          'Configure IP settings on desktop and laptop',
          'Join computers to domain',
          'Login with administrator account',
          'Switch to user accounts',
          'Test remote desktop connections'
        ],
        clientConfiguration: {
          title: 'Client Computer Configuration',
          steps: [
            'Perform ncpa.cpl command',
            'Right click ethernet adapter, IPv4 properties',
            'Select Obtain an IP address automatically',
            'Enter server IP on preferred DNS Server: 10.0.0.5',
            'Check Status, ensure DHCP Enable shows YES'
          ]
        },
        domainJoining: {
          title: 'Joining Domain',
          steps: [
            'Search and type View Advanced System Settings',
            'Select Computer Name tab, select Change',
            'Select Domain and type: "bgfccss.com"',
            'Enter administrator credentials:',
            'Username: Administrator, Password: BGFCCSS@2025 (Use only for training/demo purposes. Do not use in real-world systems.)',
            'Restart computer after joining'
          ]
        },
        userLogin: {
          title: 'User Account Login',
          steps: [
            'Login using Administrator Account:',
            'Username: Administrator, Password: BGFCCSS@2025 (Use only for training/demo purposes. Do not use in real-world systems.)',
            'Switch user account via CTRL+ALT+DELETE',
            'Select switch user, enter user credentials:',
            'Desktop: Username: win10, Password: Admin@123456789 (Use only for training/demo purposes. Do not use in real-world systems.)',
            'Laptop: Username: win11, Password: Admin@123456789 (Use only for training/demo purposes. Do not use in real-world systems.)',
            'Perform gpupdate/force command',
            'Test folder redirection configuration'
          ]
        },
        remoteDesktop: {
          title: 'Remote Desktop Connection',
          description: 'Perform Remote Desktop connection among SERVER, DESKTOP AND LAPTOP vice versa',
          steps: [
            'Open Remote Desktop Connection',
            'Enter target computer IP address',
            'Enter administrator credentials',
            'Test connectivity between all devices',
            'Verify folder redirection and group policy settings'
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
            Structured learning modules covering all aspects of server configuration and management.
          </p>
        </div>
        
        <div className="space-y-6">
          {modules.map((module, index) => (
            <div key={module.id} className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1 mb-4 lg:mb-0">
                  <div className="flex items-center mb-3">
                    <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">
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
                        <ChevronRight className="h-3 w-3 mr-2 text-purple-500" />
                        {topic}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 lg:ml-6 lg:flex-shrink-0">
                  {module.videoUrl && (
                    <button 
                      onClick={() => setSelectedVideo(module.videoUrl)}
                      className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center"
                    >
                      <Video className="h-4 w-4 mr-2" />
                      Watch Video
                    </button>
                  )}
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
              {module.videoUrl && selectedVideo === module.videoUrl && (
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
                          <div className="bg-purple-50 rounded-lg p-4">
                            <h4 className="font-semibold text-purple-900 mb-2">Objectives:</h4>
                            <p className="text-purple-800">{module.practiceContent.objectives}</p>
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

                          {/* Firewall Settings for Module 1 */}
                          {module.id === 'module1' && module.practiceContent.firewallSettings && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Firewall Configuration:</h4>
                              <div className="bg-blue-50 rounded-lg p-4">
                                <h5 className="font-semibold text-blue-900 mb-2">{module.practiceContent.firewallSettings.title}</h5>
                                <p className="text-blue-800 mb-3">{module.practiceContent.firewallSettings.description}</p>
                                <ul className="space-y-1">
                                  {module.practiceContent.firewallSettings.services.map((service, idx) => (
                                    <li key={idx} className="flex items-center text-blue-700">
                                      <CheckCircle className="h-4 w-4 mr-2" />
                                      {service}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}

                          {/* Network Configuration for Module 1 */}
                          {module.id === 'module1' && module.practiceContent.networkConfiguration && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Network Configuration:</h4>
                              <div className="bg-green-50 rounded-lg p-4">
                                <h5 className="font-semibold text-green-900 mb-2">{module.practiceContent.networkConfiguration.title}</h5>
                                <div className="grid md:grid-cols-2 gap-4">
                                  {Object.entries(module.practiceContent.networkConfiguration.settings).map(([key, value]) => (
                                    <div key={key} className="flex justify-between">
                                      <span className="font-medium text-green-800">{key}:</span>
                                      <span className="text-green-700">{value}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Active Directory Setup for Module 2 */}
                          {module.id === 'module2' && module.practiceContent.activeDirectorySetup && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Active Directory Setup:</h4>
                              <div className="bg-yellow-50 rounded-lg p-4">
                                <h5 className="font-semibold text-yellow-900 mb-2">{module.practiceContent.activeDirectorySetup.title}</h5>
                                <ol className="list-decimal list-inside space-y-2 text-yellow-800">
                                  {module.practiceContent.activeDirectorySetup.steps.map((step, idx) => (
                                    <li key={idx}>{step}</li>
                                  ))}
                                </ol>
                              </div>
                            </div>
                          )}

                          {/* DHCP Configuration for Module 2 */}
                          {module.id === 'module2' && module.practiceContent.dhcpConfiguration && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">DHCP Configuration:</h4>
                              <div className="bg-orange-50 rounded-lg p-4">
                                <h5 className="font-semibold text-orange-900 mb-2">{module.practiceContent.dhcpConfiguration.title}</h5>
                                <ol className="list-decimal list-inside space-y-2 text-orange-800">
                                  {module.practiceContent.dhcpConfiguration.steps.map((step, idx) => (
                                    <li key={idx}>{step}</li>
                                  ))}
                                </ol>
                              </div>
                            </div>
                          )}

                          {/* Folder Sharing for Module 3 */}
                          {module.id === 'module3' && module.practiceContent.folderSharing && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Folder Sharing:</h4>
                              <div className="bg-indigo-50 rounded-lg p-4">
                                <h5 className="font-semibold text-indigo-900 mb-2">{module.practiceContent.folderSharing.title}</h5>
                                <ol className="list-decimal list-inside space-y-2 text-indigo-800">
                                  {module.practiceContent.folderSharing.steps.map((step, idx) => (
                                    <li key={idx}>{step}</li>
                                  ))}
                                </ol>
                              </div>
                            </div>
                          )}

                          {/* Group Policy for Module 3 */}
                          {module.id === 'module3' && module.practiceContent.groupPolicy && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Group Policy:</h4>
                              <div className="bg-pink-50 rounded-lg p-4">
                                <h5 className="font-semibold text-pink-900 mb-2">{module.practiceContent.groupPolicy.title}</h5>
                                <ol className="list-decimal list-inside space-y-2 text-pink-800">
                                  {module.practiceContent.groupPolicy.steps.map((step, idx) => (
                                    <li key={idx}>{step}</li>
                                  ))}
                                </ol>
                              </div>
                            </div>
                          )}

                          {/* User Creation for Module 3 */}
                          {module.id === 'module3' && module.practiceContent.userCreation && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">User Creation:</h4>
                              <div className="bg-red-50 rounded-lg p-4">
                                <h5 className="font-semibold text-red-900 mb-2">{module.practiceContent.userCreation.title}</h5>
                                <ol className="list-decimal list-inside space-y-2 text-red-800">
                                  {module.practiceContent.userCreation.steps.map((step, idx) => (
                                    <li key={idx}>{step}</li>
                                  ))}
                                </ol>
                              </div>
                            </div>
                          )}

                          {/* Client Configuration for Module 4 */}
                          {module.id === 'module4' && module.practiceContent.clientConfiguration && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Client Configuration:</h4>
                              <div className="bg-teal-50 rounded-lg p-4">
                                <h5 className="font-semibold text-teal-900 mb-2">{module.practiceContent.clientConfiguration.title}</h5>
                                <ol className="list-decimal list-inside space-y-2 text-teal-800">
                                  {module.practiceContent.clientConfiguration.steps.map((step, idx) => (
                                    <li key={idx}>{step}</li>
                                  ))}
                                </ol>
                              </div>
                            </div>
                          )}

                          {/* Domain Joining for Module 4 */}
                          {module.id === 'module4' && module.practiceContent.domainJoining && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Domain Joining:</h4>
                              <div className="bg-cyan-50 rounded-lg p-4">
                                <h5 className="font-semibold text-cyan-900 mb-2">{module.practiceContent.domainJoining.title}</h5>
                                <ol className="list-decimal list-inside space-y-2 text-cyan-800">
                                  {module.practiceContent.domainJoining.steps.map((step, idx) => (
                                    <li key={idx}>{step}</li>
                                  ))}
                                </ol>
                              </div>
                            </div>
                          )}

                          {/* User Login for Module 4 */}
                          {module.id === 'module4' && module.practiceContent.userLogin && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">User Login:</h4>
                              <div className="bg-lime-50 rounded-lg p-4">
                                <h5 className="font-semibold text-lime-900 mb-2">{module.practiceContent.userLogin.title}</h5>
                                <ol className="list-decimal list-inside space-y-2 text-lime-800">
                                  {module.practiceContent.userLogin.steps.map((step, idx) => (
                                    <li key={idx}>{step}</li>
                                  ))}
                                </ol>
                              </div>
                            </div>
                          )}

                          {/* Remote Desktop for Module 4 */}
                          {module.id === 'module4' && module.practiceContent.remoteDesktop && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Remote Desktop:</h4>
                              <div className="bg-emerald-50 rounded-lg p-4">
                                <h5 className="font-semibold text-emerald-900 mb-2">{module.practiceContent.remoteDesktop.title}</h5>
                                <p className="text-emerald-800 mb-3">{module.practiceContent.remoteDesktop.description}</p>
                                <ol className="list-decimal list-inside space-y-2 text-emerald-800">
                                  {module.practiceContent.remoteDesktop.steps.map((step, idx) => (
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