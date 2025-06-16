"use client"

import Link from 'next/link'
import { 
  Server, 
  ArrowLeft, 
  BookOpen, 
  Video, 
  FileText, 
  CheckCircle,
  Clock,
  Users,
  ChevronRight,
  Shield,
  Database
} from 'lucide-react'
import Footer from '@/components/Footer'

export default function COC3Page() {
  const learningObjectives = [
    'Set up and configure computer servers',
    'Configure user access and permissions',
    'Set up network services and protocols',
    'Implement server security measures',
    'Perform server testing and validation',
    'Create and maintain documentation'
  ]

  const modules = [
    {
      id: 'module1',
      title: 'Server Fundamentals',
      description: 'Understanding server types, roles, and basic administration',
      duration: '8 hours',
      topics: ['Server Types', 'Server Roles', 'Basic Administration', 'Server Hardware'],
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
      title: 'User Access Management',
      description: 'Setting up user accounts, groups, and access permissions',
      duration: '10 hours',
      topics: ['User Accounts', 'Group Management', 'Permissions', 'Access Control'],
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
            'Set password to "Admin@12345"',
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
        },
        userCreation: {
          title: 'Organizational User Creation',
          steps: [
            'Go to Tools, select Active Directory Users and Computers',
            'Right click on "bgfccss.com", select New, click Organizational Unit',
            'Name it "Redirection OU"',
            'Under "Redirection OU", create two User accounts:',
            'Username: win10, Password: Admin@123456789',
            'Username: win11, Password: Admin@123456789'
          ]
        }
      }
    },
    {
      id: 'module3',
      title: 'Network Services Configuration',
      description: 'Configuring essential network services and protocols',
      duration: '12 hours',
      topics: ['DHCP Services', 'DNS Configuration', 'File Services', 'Print Services'],
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
        }
      }
    },
    {
      id: 'module4',
      title: 'Server Security and Testing',
      description: 'Implementing security measures and testing procedures',
      duration: '8 hours',
      topics: ['Security Policies', 'Firewall Configuration', 'Testing Procedures', 'Documentation'],
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
            'Username: Administrator, Password: BGFCCSS@2024',
            'Restart computer after joining'
          ]
        },
        userLogin: {
          title: 'User Account Login',
          steps: [
            'Login using Administrator Account:',
            'Username: Administrator, Password: BGFCCSS@2024',
            'Switch user account via CTRL+ALT+DELETE',
            'Select switch user, enter user credentials:',
            'Desktop: Username: win10, Password: Admin@123456789',
            'Laptop: Username: win11, Password: Admin@123456789',
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

  const serverTypes = [
    {
      name: 'File Server',
      description: 'Manages and shares files across the network',
      icon: FileText,
      features: ['File sharing', 'Access control', 'Backup management']
    },
    {
      name: 'Web Server',
      description: 'Hosts websites and web applications',
      icon: Server,
      features: ['HTTP/HTTPS', 'SSL certificates', 'Content management']
    },
    {
      name: 'Database Server',
      description: 'Manages and stores database information',
      icon: Database,
      features: ['Data storage', 'Query processing', 'Data backup']
    },
    {
      name: 'Domain Controller',
      description: 'Manages network authentication and directory services',
      icon: Shield,
      features: ['User authentication', 'Group policies', 'Active Directory']
    }
  ]

  const networkServices = [
    {
      name: 'DHCP (Dynamic Host Configuration Protocol)',
      description: 'Automatically assigns IP addresses to network devices',
      features: ['IP address allocation', 'Subnet configuration', 'Lease management']
    },
    {
      name: 'DNS (Domain Name System)',
      description: 'Translates domain names to IP addresses',
      features: ['Name resolution', 'Zone management', 'Record configuration']
    },
    {
      name: 'File Services',
      description: 'Provides file sharing and storage solutions',
      features: ['Shared folders', 'Permissions', 'Quota management']
    },
    {
      name: 'Print Services',
      description: 'Manages network printing and print queues',
      features: ['Printer sharing', 'Queue management', 'Driver installation']
    }
  ]

  const securityMeasures = [
    {
      title: 'Access Control',
      description: 'Implement user authentication and authorization',
      icon: Shield
    },
    {
      title: 'Firewall Configuration',
      description: 'Set up network security and traffic filtering',
      icon: Shield
    },
    {
      title: 'Data Encryption',
      description: 'Protect sensitive data with encryption',
      icon: Shield
    },
    {
      title: 'Backup and Recovery',
      description: 'Implement regular backup and disaster recovery',
      icon: Database
    }
  ]

  const assessmentCriteria = [
    'Proper server installation and configuration',
    'Correct user access setup and management',
    'Successful network services configuration',
    'Implementation of security measures',
    'Server testing and validation procedures',
    'Complete documentation and reporting'
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
              <Link href="/coc2" className="text-gray-600 hover:text-gray-900">COC 2</Link>
              <Link href="/coc4" className="text-gray-600 hover:text-gray-900">COC 4</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center mb-6">
            <Server className="h-12 w-12 mr-4" />
            <div>
              <h1 className="text-4xl font-bold">COC 3: Setting up Computer Servers</h1>
              <p className="text-xl opacity-90">Basic Server Administration</p>
            </div>
          </div>
          <p className="text-lg max-w-3xl">
            This module covers setting up computer servers including user access configuration, 
            network services setup, and basic server administration. You will learn to configure 
            servers, manage users, and implement security measures.
          </p>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Duration</h3>
              <p className="text-gray-600">38 Hours</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Prerequisites</h3>
              <p className="text-gray-600">Intro to CSS + COC 1 + COC 2</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-green-600" />
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
                  <CheckCircle className="h-6 w-6 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{objective}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Server Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Servers</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding different server types and their specific roles in network infrastructure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {serverTypes.map((server, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <server.icon className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{server.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{server.description}</p>
                <ul className="space-y-2">
                  {server.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="h-3 w-3 mr-2 text-purple-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Network Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Essential network services that servers provide to support network operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {networkServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-purple-600 p-6">
                  <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <ChevronRight className="h-3 w-3 mr-2 text-purple-500" />
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

      {/* Security Measures */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Security Measures</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Essential security practices to protect servers and network infrastructure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {securityMeasures.map((measure, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <measure.icon className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{measure.title}</h3>
                </div>
                <p className="text-gray-600">{measure.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Modules</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Structured learning modules covering all aspects of server setup and administration.
            </p>
          </div>
          
          <div className="space-y-6">
            {modules.map((module, index) => (
              <div key={module.id} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
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
                  <div className="ml-6 flex space-x-2">
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center">
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
                              <div className="bg-purple-50 rounded-lg p-4">
                                <h5 className="font-semibold text-purple-900 mb-2">{module.practiceContent.dhcpConfiguration.title}</h5>
                                <ol className="list-decimal list-inside space-y-2 text-purple-800">
                                  {module.practiceContent.dhcpConfiguration.steps.map((step, idx) => (
                                    <li key={idx}>{step}</li>
                                  ))}
                                </ol>
                              </div>
                            </div>
                          )}

                          {/* User Creation for Module 2 */}
                          {module.id === 'module2' && module.practiceContent.userCreation && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">User Creation:</h4>
                              <div className="bg-blue-50 rounded-lg p-4">
                                <h5 className="font-semibold text-blue-900 mb-2">{module.practiceContent.userCreation.title}</h5>
                                <ol className="list-decimal list-inside space-y-2 text-blue-800">
                                  {module.practiceContent.userCreation.steps.map((step, idx) => (
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
                              <div className="bg-green-50 rounded-lg p-4">
                                <h5 className="font-semibold text-green-900 mb-2">{module.practiceContent.folderSharing.title}</h5>
                                <ol className="list-decimal list-inside space-y-2 text-green-800">
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
                              <h4 className="font-semibold text-gray-900 mb-3">Group Policy Configuration:</h4>
                              <div className="bg-purple-50 rounded-lg p-4">
                                <h5 className="font-semibold text-purple-900 mb-2">{module.practiceContent.groupPolicy.title}</h5>
                                <ol className="list-decimal list-inside space-y-2 text-purple-800">
                                  {module.practiceContent.groupPolicy.steps.map((step, idx) => (
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
                              <div className="bg-blue-50 rounded-lg p-4">
                                <h5 className="font-semibold text-blue-900 mb-2">{module.practiceContent.clientConfiguration.title}</h5>
                                <ol className="list-decimal list-inside space-y-2 text-blue-800">
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
                              <div className="bg-green-50 rounded-lg p-4">
                                <h5 className="font-semibold text-green-900 mb-2">{module.practiceContent.domainJoining.title}</h5>
                                <ol className="list-decimal list-inside space-y-2 text-green-800">
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
                              <div className="bg-yellow-50 rounded-lg p-4">
                                <h5 className="font-semibold text-yellow-900 mb-2">{module.practiceContent.userLogin.title}</h5>
                                <ol className="list-decimal list-inside space-y-2 text-yellow-800">
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
                              <h4 className="font-semibold text-gray-900 mb-3">Remote Desktop Connection:</h4>
                              <div className="bg-purple-50 rounded-lg p-4">
                                <h5 className="font-semibold text-purple-900 mb-2">{module.practiceContent.remoteDesktop.title}</h5>
                                <p className="text-purple-800 mb-3">{module.practiceContent.remoteDesktop.description}</p>
                                <ol className="list-decimal list-inside space-y-2 text-purple-800">
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
              </div>
            ))}
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
                  <div className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-semibold text-sm">{index + 1}</span>
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
              Continue your journey with COC 4: Maintaining and Repairing Systems and Networks
            </p>
            <Link 
              href="/coc4"
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-flex items-center"
            >
              Continue to COC 4 <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
} 