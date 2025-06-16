"use client"

import Link from 'next/link'
import { 
  Wrench, 
  ArrowLeft, 
  BookOpen, 
  Video, 
  FileText, 
  CheckCircle,
  Clock,
  Users,
  ChevronRight,
  Shield,
  Database,
  HardDrive
} from 'lucide-react'
import Footer from '@/components/Footer'

export default function COC4Page() {
  const learningObjectives = [
    'Perform preventive maintenance on computer systems and networks',
    'Diagnose and troubleshoot system and network problems',
    'Configure backup and restore procedures',
    'Set up file and printer sharing',
    'Implement network security measures',
    'Document maintenance and repair procedures'
  ]

  const modules = [
    {
      id: 'module1',
      title: 'Preventive Maintenance',
      description: 'Regular maintenance procedures to prevent system failures',
      duration: '10 hours',
      topics: ['System Maintenance', 'Hardware Inspection', 'Software Updates', 'Performance Monitoring'],
      practiceContent: {
        title: 'Backup and Restore Over the Network',
        type: 'A',
        objectives: 'Configure and perform backup and restore operations over network connections',
        materials: ['Server computer', 'Client computers', 'Network connection', 'Shared folders'],
        procedures: [
          'Prepare path directory and create folders for backup',
          'Configure backup and restore over the network',
          'Perform backup operations',
          'Test restore procedures',
          'Verify data integrity'
        ],
        backupTypes: {
          title: 'Types of Backups',
          description: 'Understanding different backup strategies and their use cases',
          types: [
            {
              name: 'Full Backup',
              description: 'Complete copy of all selected data including files, folders, SaaS applications, and hard drives',
              advantages: ['Minimal restore time', 'Complete data protection'],
              disadvantages: ['Longer backup time', 'Large storage space required']
            },
            {
              name: 'Differential Backup',
              description: 'Backs up data created or changed since the last full backup',
              advantages: ['Faster than full backup', 'Requires only two components for restore'],
              disadvantages: ['Backup size grows over time', 'Slower than incremental']
            },
            {
              name: 'Incremental Backup',
              description: 'Only stores changes made since the previous backup',
              advantages: ['Fastest backup time', 'Minimal storage space'],
              disadvantages: ['Slower restore time', 'Requires all backup sets for restore']
            }
          ]
        },
        backupRestoreDifference: {
          title: 'Backup vs Restore',
          description: 'Understanding the differences between backup and restore operations',
          backup: {
            title: 'Backup',
            description: 'Copy of files stored in separate location from original',
            characteristics: [
              'Not automatic (can be automated)',
              'Stored externally',
              'Protects against complete file loss',
              'Requires external storage space'
            ]
          },
          restore: {
            title: 'Restore',
            description: 'Process to recover data from backup or restore points',
            characteristics: [
              'Can be automatic (restore points)',
              'Done internally to computer',
              'Does not require additional space',
              'Cannot guarantee complete file recovery'
            ]
          }
        },
        stepByStep: {
          title: 'Step-by-Step Backup and Restore Procedures',
          serverSide: {
            title: 'Server Side Setup',
            steps: [
              'Select any location (e.g., "Drive D")',
              'Create folder named "Backup and Restore"',
              'Share the created folder',
              'Add EVERYONE permission user'
            ]
          },
          clientSide: {
            title: 'Client Side Setup',
            steps: [
              'Select any location (e.g., "Drive D")',
              'Create folder named "Backup and Restore"',
              'Create some files (folders, text files, rich text) inside the folder'
            ]
          },
          backupConfiguration: {
            title: 'Backup Configuration',
            steps: [
              'Go to "start" and type "Backup and restore"',
              'Go to "Setup backup" or "Change settings"',
              'Select "Save on a Network" then "Browse"',
              'Select "Save on a network", click "Browse"',
              'Select "Server Name", expand server, select "Backup and restore" folder',
              'Enter network credentials: Username (BGFCCSS\\Administrator), Password (BGFC@12345)',
              'Click "Next", select "Let me choose"',
              'Select drive path (e.g., drive "D")',
              'Expand drive D and check/select "Backup and restore" folder',
              'UNCHECK include system image of drives',
              'Click "Save settings and run backup"',
              'Wait until progress is complete'
            ]
          },
          restoreProcedure: {
            title: 'Restore Procedure',
            steps: [
              'Delete the folder created for backup (e.g., "Backup and Restore" folder)',
              'Go to start and type "backup and restore"',
              'Select "Restore my files"',
              'Select "Browse for folders" and select the folder for restoration',
              'Click "Next" and check "In the original location"'
            ]
          }
        }
      }
    },
    {
      id: 'module2',
      title: 'File and Printer Sharing',
      description: 'Setting up and managing shared resources on the network',
      duration: '8 hours',
      topics: ['File Sharing', 'Printer Sharing', 'Permissions', 'Network Access'],
      practiceContent: {
        title: 'File and Printer Sharing Configuration',
        type: 'B',
        objectives: 'Configure file and printer sharing over network connections',
        materials: ['Printer', 'Printer Driver', 'Power cable', 'USB cable', 'Network connection'],
        procedures: [
          'Install printer using printer driver to the SERVER',
          'Share the printer with proper permissions',
          'Connect shared printer over the network',
          'Test printing functionality',
          'Verify access permissions'
        ],
        printerSharing: {
          title: 'Printer Sharing Configuration',
          description: 'Printer sharing allows multiple computers and devices on the same network to access one or more printers',
          steps: [
            'Go to "Control Panel"',
            'Click "View devices and printers"',
            'Right-click the printer then properties',
            'Click sharing tab',
            'Check share this printer',
            'Click additional drivers if necessary'
          ]
        },
        networkConnection: {
          title: 'Connecting Shared Printer Over the Network',
          steps: [
            'On client side (laptop and desktop), press "Windows + R"',
            'Type "\\\\" and IP of the server (e.g., \\\\192.168.10.5)',
            'Click the printer then connect',
            'Go to control panel, device and printers',
            'Right-click the printer then properties',
            'Click on "Print Test Page"'
          ]
        }
      }
    },
    {
      id: 'module3',
      title: 'System Troubleshooting',
      description: 'Diagnosing and resolving system and network issues',
      duration: '12 hours',
      topics: ['Problem Diagnosis', 'Troubleshooting Methods', 'System Recovery', 'Performance Optimization'],
      practiceContent: {
        title: 'System Troubleshooting and Recovery',
        type: 'B',
        objectives: 'Diagnose system problems, perform troubleshooting, and implement recovery procedures',
        materials: ['Computer system', 'Diagnostic tools', 'Recovery media', 'Documentation'],
        procedures: [
          'Identify system problems and symptoms',
          'Use diagnostic tools and utilities',
          'Apply troubleshooting methodologies',
          'Implement recovery procedures',
          'Test system functionality after repair'
        ],
        troubleshootingSteps: {
          title: 'Troubleshooting Methodology',
          steps: [
            'Identify the problem and gather information',
            'Establish a theory of probable cause',
            'Test the theory to determine cause',
            'Establish a plan of action to resolve the problem',
            'Implement the solution or escalate as necessary',
            'Verify full system functionality',
            'Document findings, actions, and outcomes'
          ]
        },
        commonIssues: {
          title: 'Common System Issues',
          issues: [
            {
              problem: 'System won\'t boot',
              possibleCauses: ['Hardware failure', 'Corrupted boot files', 'Power supply issues'],
              solutions: ['Check hardware connections', 'Use recovery media', 'Replace faulty components']
            },
            {
              problem: 'Network connectivity issues',
              possibleCauses: ['IP configuration', 'Cable problems', 'Router/switch issues'],
              solutions: ['Check IP settings', 'Test cables', 'Restart network devices']
            },
            {
              problem: 'Slow system performance',
              possibleCauses: ['Insufficient RAM', 'Disk fragmentation', 'Malware'],
              solutions: ['Add more RAM', 'Defragment disk', 'Run antivirus scan']
            }
          ]
        }
      }
    },
    {
      id: 'module4',
      title: 'Network Maintenance',
      description: 'Maintaining and optimizing network infrastructure',
      duration: '8 hours',
      topics: ['Network Monitoring', 'Performance Tuning', 'Security Updates', 'Documentation'],
      practiceContent: {
        title: 'Network Maintenance and Optimization',
        type: 'B',
        objectives: 'Perform network maintenance, monitor performance, and implement security updates',
        materials: ['Network monitoring tools', 'Documentation system', 'Security software', 'Testing equipment'],
        procedures: [
          'Monitor network performance and traffic',
          'Update network security measures',
          'Optimize network configuration',
          'Document network changes',
          'Test network functionality'
        ],
        networkMonitoring: {
          title: 'Network Monitoring',
          activities: [
            'Monitor bandwidth usage and network traffic',
            'Check for network bottlenecks and performance issues',
            'Monitor server and device status',
            'Track network security events',
            'Generate performance reports'
          ]
        },
        securityUpdates: {
          title: 'Security Updates and Maintenance',
          activities: [
            'Install operating system updates and patches',
            'Update antivirus and security software',
            'Review and update firewall rules',
            'Monitor security logs for suspicious activity',
            'Implement access control measures'
          ]
        },
        documentation: {
          title: 'Network Documentation',
          requirements: [
            'Maintain network topology diagrams',
            'Document IP addressing schemes',
            'Record device configurations',
            'Update user access lists',
            'Document troubleshooting procedures'
          ]
        }
      }
    }
  ]

  const maintenanceTypes = [
    {
      name: 'Preventive Maintenance',
      description: 'Regular maintenance to prevent system failures',
      icon: Shield,
      activities: ['System updates', 'Hardware inspection', 'Performance monitoring', 'Backup verification']
    },
    {
      name: 'Corrective Maintenance',
      description: 'Repair and fix issues after they occur',
      icon: Wrench,
      activities: ['Problem diagnosis', 'Component replacement', 'System recovery', 'Testing']
    },
    {
      name: 'Predictive Maintenance',
      description: 'Monitor systems to predict potential failures',
      icon: Database,
      activities: ['Performance analysis', 'Trend monitoring', 'Predictive alerts', 'Proactive repairs']
    },
    {
      name: 'Condition-Based Maintenance',
      description: 'Maintenance based on actual system condition',
      icon: HardDrive,
      activities: ['Real-time monitoring', 'Condition assessment', 'Scheduled maintenance', 'Performance optimization']
    }
  ]

  const troubleshootingTools = [
    {
      name: 'System Diagnostics',
      description: 'Built-in tools for system health checks',
      features: ['Hardware diagnostics', 'Performance monitoring', 'Error reporting', 'System information']
    },
    {
      name: 'Network Utilities',
      description: 'Tools for network connectivity testing',
      features: ['Ping', 'Tracert', 'Ipconfig', 'Netstat', 'Nslookup']
    },
    {
      name: 'Recovery Tools',
      description: 'Tools for system recovery and repair',
      features: ['System restore', 'Safe mode', 'Recovery console', 'Backup and restore']
    },
    {
      name: 'Third-Party Tools',
      description: 'Specialized diagnostic and repair software',
      features: ['Hardware testing', 'Performance optimization', 'Security scanning', 'Data recovery']
    }
  ]

  const securityMeasures = [
    {
      title: 'Access Control',
      description: 'Implement user authentication and authorization',
      icon: Shield
    },
    {
      title: 'Data Protection',
      description: 'Encrypt sensitive data and implement backup procedures',
      icon: Database
    },
    {
      title: 'Network Security',
      description: 'Configure firewalls and monitor network traffic',
      icon: Shield
    },
    {
      title: 'Software Updates',
      description: 'Keep systems updated with latest security patches',
      icon: Wrench
    }
  ]

  const assessmentCriteria = [
    'Proper preventive maintenance procedures',
    'Accurate problem diagnosis and troubleshooting',
    'Successful backup and restore operations',
    'Correct file and printer sharing setup',
    'Effective network maintenance practices',
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
              <Link href="/coc3" className="text-gray-600 hover:text-gray-900">COC 3</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center mb-6">
            <Wrench className="h-12 w-12 mr-4" />
            <div>
              <h1 className="text-4xl font-bold">COC 4: Maintaining and Repairing Computer Systems and Networks</h1>
              <p className="text-xl opacity-90">System Maintenance and Troubleshooting</p>
            </div>
          </div>
          <p className="text-lg max-w-3xl">
            This module covers maintaining and repairing computer systems and networks including 
            preventive maintenance, troubleshooting, backup and restore procedures, and file/printer sharing.
          </p>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Duration</h3>
              <p className="text-gray-600">38 Hours</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Prerequisites</h3>
              <p className="text-gray-600">Intro to CSS + COC 1 + COC 2 + COC 3</p>
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
                  <CheckCircle className="h-6 w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{objective}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Maintenance</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding different maintenance approaches for optimal system performance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {maintenanceTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <type.icon className="h-8 w-8 text-orange-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{type.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.activities.map((activity, activityIndex) => (
                    <li key={activityIndex} className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="h-3 w-3 mr-2 text-orange-500" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Troubleshooting Tools */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Troubleshooting Tools</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Essential tools and utilities for diagnosing and resolving system and network issues.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {troubleshootingTools.map((tool, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-orange-600 p-6">
                  <h3 className="text-xl font-semibold text-white">{tool.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{tool.description}</p>
                  <ul className="space-y-2">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <ChevronRight className="h-3 w-3 mr-2 text-orange-500" />
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
              Essential security practices to protect systems and networks during maintenance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {securityMeasures.map((measure, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <measure.icon className="h-8 w-8 text-orange-600 mr-3" />
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
              Structured learning modules covering all aspects of system maintenance and repair.
            </p>
          </div>
          
          <div className="space-y-6">
            {modules.map((module, index) => (
              <div key={module.id} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">
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
                          <ChevronRight className="h-3 w-3 mr-2 text-orange-500" />
                          {topic}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="ml-6 flex space-x-2">
                    <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors flex items-center">
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
                          <div className="bg-orange-50 rounded-lg p-4">
                            <h4 className="font-semibold text-orange-900 mb-2">Objectives:</h4>
                            <p className="text-orange-800">{module.practiceContent.objectives}</p>
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

                          {/* Backup Types for Module 1 */}
                          {module.id === 'module1' && module.practiceContent.backupTypes && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Backup Types:</h4>
                              <div className="space-y-4">
                                {module.practiceContent.backupTypes.types.map((type, idx) => (
                                  <div key={idx} className="bg-blue-50 rounded-lg p-4">
                                    <h5 className="font-semibold text-blue-900 mb-2">{type.name}</h5>
                                    <p className="text-blue-800 mb-3">{type.description}</p>
                                    <div className="grid md:grid-cols-2 gap-4">
                                      <div>
                                        <h6 className="font-medium text-blue-900 mb-2">Advantages:</h6>
                                        <ul className="space-y-1">
                                          {type.advantages.map((adv, advIdx) => (
                                            <li key={advIdx} className="flex items-center text-blue-700">
                                              <CheckCircle className="h-4 w-4 mr-2" />
                                              {adv}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                      <div>
                                        <h6 className="font-medium text-blue-900 mb-2">Disadvantages:</h6>
                                        <ul className="space-y-1">
                                          {type.disadvantages.map((dis, disIdx) => (
                                            <li key={disIdx} className="flex items-center text-blue-700">
                                              <ChevronRight className="h-4 w-4 mr-2" />
                                              {dis}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Backup vs Restore for Module 1 */}
                          {module.id === 'module1' && module.practiceContent.backupRestoreDifference && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Backup vs Restore:</h4>
                              <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-green-50 rounded-lg p-4">
                                  <h5 className="font-semibold text-green-900 mb-2">{module.practiceContent.backupRestoreDifference.backup.title}</h5>
                                  <p className="text-green-800 mb-3">{module.practiceContent.backupRestoreDifference.backup.description}</p>
                                  <ul className="space-y-1">
                                    {module.practiceContent.backupRestoreDifference.backup.characteristics.map((char, idx) => (
                                      <li key={idx} className="flex items-center text-green-700">
                                        <CheckCircle className="h-4 w-4 mr-2" />
                                        {char}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="bg-purple-50 rounded-lg p-4">
                                  <h5 className="font-semibold text-purple-900 mb-2">{module.practiceContent.backupRestoreDifference.restore.title}</h5>
                                  <p className="text-purple-800 mb-3">{module.practiceContent.backupRestoreDifference.restore.description}</p>
                                  <ul className="space-y-1">
                                    {module.practiceContent.backupRestoreDifference.restore.characteristics.map((char, idx) => (
                                      <li key={idx} className="flex items-center text-purple-700">
                                        <CheckCircle className="h-4 w-4 mr-2" />
                                        {char}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Step-by-Step Procedures for Module 1 */}
                          {module.id === 'module1' && module.practiceContent.stepByStep && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Detailed Procedures:</h4>
                              <div className="space-y-4">
                                <div className="bg-yellow-50 rounded-lg p-4">
                                  <h5 className="font-semibold text-yellow-900 mb-2">{module.practiceContent.stepByStep.serverSide.title}</h5>
                                  <ol className="list-decimal list-inside space-y-2 text-yellow-800">
                                    {module.practiceContent.stepByStep.serverSide.steps.map((step, idx) => (
                                      <li key={idx}>{step}</li>
                                    ))}
                                  </ol>
                                </div>
                                <div className="bg-blue-50 rounded-lg p-4">
                                  <h5 className="font-semibold text-blue-900 mb-2">{module.practiceContent.stepByStep.clientSide.title}</h5>
                                  <ol className="list-decimal list-inside space-y-2 text-blue-800">
                                    {module.practiceContent.stepByStep.clientSide.steps.map((step, idx) => (
                                      <li key={idx}>{step}</li>
                                    ))}
                                  </ol>
                                </div>
                                <div className="bg-green-50 rounded-lg p-4">
                                  <h5 className="font-semibold text-green-900 mb-2">{module.practiceContent.stepByStep.backupConfiguration.title}</h5>
                                  <ol className="list-decimal list-inside space-y-2 text-green-800">
                                    {module.practiceContent.stepByStep.backupConfiguration.steps.map((step, idx) => (
                                      <li key={idx}>{step}</li>
                                    ))}
                                  </ol>
                                </div>
                                <div className="bg-purple-50 rounded-lg p-4">
                                  <h5 className="font-semibold text-purple-900 mb-2">{module.practiceContent.stepByStep.restoreProcedure.title}</h5>
                                  <ol className="list-decimal list-inside space-y-2 text-purple-800">
                                    {module.practiceContent.stepByStep.restoreProcedure.steps.map((step, idx) => (
                                      <li key={idx}>{step}</li>
                                    ))}
                                  </ol>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Printer Sharing for Module 2 */}
                          {module.id === 'module2' && module.practiceContent.printerSharing && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Printer Sharing:</h4>
                              <div className="bg-blue-50 rounded-lg p-4">
                                <h5 className="font-semibold text-blue-900 mb-2">{module.practiceContent.printerSharing.title}</h5>
                                <p className="text-blue-800 mb-3">{module.practiceContent.printerSharing.description}</p>
                                <ol className="list-decimal list-inside space-y-2 text-blue-800">
                                  {module.practiceContent.printerSharing.steps.map((step, idx) => (
                                    <li key={idx}>{step}</li>
                                  ))}
                                </ol>
                              </div>
                            </div>
                          )}

                          {/* Network Connection for Module 2 */}
                          {module.id === 'module2' && module.practiceContent.networkConnection && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Network Connection:</h4>
                              <div className="bg-green-50 rounded-lg p-4">
                                <h5 className="font-semibold text-green-900 mb-2">{module.practiceContent.networkConnection.title}</h5>
                                <ol className="list-decimal list-inside space-y-2 text-green-800">
                                  {module.practiceContent.networkConnection.steps.map((step, idx) => (
                                    <li key={idx}>{step}</li>
                                  ))}
                                </ol>
                              </div>
                            </div>
                          )}

                          {/* Troubleshooting Steps for Module 3 */}
                          {module.id === 'module3' && module.practiceContent.troubleshootingSteps && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Troubleshooting Methodology:</h4>
                              <div className="bg-yellow-50 rounded-lg p-4">
                                <h5 className="font-semibold text-yellow-900 mb-2">{module.practiceContent.troubleshootingSteps.title}</h5>
                                <ol className="list-decimal list-inside space-y-2 text-yellow-800">
                                  {module.practiceContent.troubleshootingSteps.steps.map((step, idx) => (
                                    <li key={idx}>{step}</li>
                                  ))}
                                </ol>
                              </div>
                            </div>
                          )}

                          {/* Common Issues for Module 3 */}
                          {module.id === 'module3' && module.practiceContent.commonIssues && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Common System Issues:</h4>
                              <div className="space-y-4">
                                {module.practiceContent.commonIssues.issues.map((issue, idx) => (
                                  <div key={idx} className="bg-red-50 rounded-lg p-4">
                                    <h5 className="font-semibold text-red-900 mb-2">Problem: {issue.problem}</h5>
                                    <div className="grid md:grid-cols-2 gap-4">
                                      <div>
                                        <h6 className="font-medium text-red-900 mb-2">Possible Causes:</h6>
                                        <ul className="space-y-1">
                                          {issue.possibleCauses.map((cause, causeIdx) => (
                                            <li key={causeIdx} className="flex items-center text-red-700">
                                              <ChevronRight className="h-4 w-4 mr-2" />
                                              {cause}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                      <div>
                                        <h6 className="font-medium text-red-900 mb-2">Solutions:</h6>
                                        <ul className="space-y-1">
                                          {issue.solutions.map((solution, solIdx) => (
                                            <li key={solIdx} className="flex items-center text-red-700">
                                              <CheckCircle className="h-4 w-4 mr-2" />
                                              {solution}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Network Monitoring for Module 4 */}
                          {module.id === 'module4' && module.practiceContent.networkMonitoring && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Network Monitoring:</h4>
                              <div className="bg-blue-50 rounded-lg p-4">
                                <h5 className="font-semibold text-blue-900 mb-2">{module.practiceContent.networkMonitoring.title}</h5>
                                <ul className="space-y-2">
                                  {module.practiceContent.networkMonitoring.activities.map((activity, idx) => (
                                    <li key={idx} className="flex items-center text-blue-700">
                                      <CheckCircle className="h-4 w-4 mr-2" />
                                      {activity}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}

                          {/* Security Updates for Module 4 */}
                          {module.id === 'module4' && module.practiceContent.securityUpdates && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Security Updates:</h4>
                              <div className="bg-green-50 rounded-lg p-4">
                                <h5 className="font-semibold text-green-900 mb-2">{module.practiceContent.securityUpdates.title}</h5>
                                <ul className="space-y-2">
                                  {module.practiceContent.securityUpdates.activities.map((activity, idx) => (
                                    <li key={idx} className="flex items-center text-green-700">
                                      <CheckCircle className="h-4 w-4 mr-2" />
                                      {activity}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}

                          {/* Documentation for Module 4 */}
                          {module.id === 'module4' && module.practiceContent.documentation && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Documentation:</h4>
                              <div className="bg-purple-50 rounded-lg p-4">
                                <h5 className="font-semibold text-purple-900 mb-2">{module.practiceContent.documentation.title}</h5>
                                <ul className="space-y-2">
                                  {module.practiceContent.documentation.requirements.map((requirement, idx) => (
                                    <li key={idx} className="flex items-center text-purple-700">
                                      <CheckCircle className="h-4 w-4 mr-2" />
                                      {requirement}
                                    </li>
                                  ))}
                                </ul>
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
                  <div className="bg-orange-100 w-8 h-8 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 font-semibold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 font-medium">{criterion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation to Glossary */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help with Terms?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Check out our comprehensive glossary for technical terms and definitions
            </p>
            <Link 
              href="/glossary"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center"
            >
              View Glossary <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
} 