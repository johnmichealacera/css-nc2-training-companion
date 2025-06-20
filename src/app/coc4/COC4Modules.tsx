"use client"

import { useState, useEffect } from 'react'
import {
  Video,
  FileText,
  Clock,
  ChevronRight
} from 'lucide-react'

export default function COC4Modules() {
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
      title: 'Preventive Maintenance',
      description: 'Regular maintenance procedures to prevent system failures',
      duration: '10 hours',
      topics: ['System Maintenance', 'Hardware Inspection', 'Software Updates', 'Performance Monitoring'],
      videoUrl: 'https://www.youtube.com/watch?v=4SRzZT7sL4I',
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
      videoUrl: 'https://www.youtube.com/watch?v=y9kXxr1vlF8',
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
            'Check "Share this printer"',
            'Set share name and click "Apply"',
            'Test printer sharing from client computers'
          ]
        }
      }
    },
    {
      id: 'module3',
      title: 'Troubleshooting and Repair',
      description: 'Diagnosing and fixing system and network problems',
      duration: '8 hours',
      topics: ['Problem Diagnosis', 'System Repair', 'Network Troubleshooting', 'Performance Optimization'],
      videoUrl: 'https://www.youtube.com/watch?v=y9kXxr1vlF8',
      practiceContent: {
        title: 'System Troubleshooting and Repair',
        type: 'B',
        objectives: 'Diagnose and repair common system and network problems',
        materials: ['Computer system', 'Diagnostic tools', 'Replacement parts', 'Network cables'],
        procedures: [
          'Identify the problem through systematic diagnosis',
          'Use appropriate diagnostic tools',
          'Implement repair procedures',
          'Test the repaired system',
          'Document the repair process'
        ]
      }
    },
    {
      id: 'module4',
      title: 'Documentation and Reporting',
      description: 'Creating and maintaining maintenance documentation',
      duration: '6 hours',
      topics: ['Maintenance Logs', 'Repair Reports', 'System Documentation', 'Performance Reports'],
      videoUrl: 'https://www.youtube.com/watch?v=y9kXxr1vlF8',
      practiceContent: {
        title: 'Maintenance Documentation',
        type: 'A',
        objectives: 'Create comprehensive maintenance and repair documentation',
        materials: ['Documentation templates', 'Reporting tools', 'System logs', 'Performance data'],
        procedures: [
          'Record maintenance activities in logs',
          'Create detailed repair reports',
          'Update system documentation',
          'Generate performance reports',
          'Maintain documentation accuracy'
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
            Structured learning modules covering all aspects of system and network maintenance.
          </p>
        </div>
        
        <div className="space-y-6">
          {modules.map((module, index) => (
            <div key={module.id} className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1 mb-4 lg:mb-0">
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
                              <div className="grid md:grid-cols-3 gap-4">
                                {module.practiceContent.backupTypes.types.map((type, idx) => (
                                  <div key={idx} className="bg-blue-50 rounded-lg p-4">
                                    <h5 className="font-semibold text-blue-900 mb-2">{type.name}</h5>
                                    <p className="text-blue-800 text-sm mb-3">{type.description}</p>
                                    <div className="mb-3">
                                      <span className="text-xs font-medium text-blue-900">Advantages:</span>
                                      <ul className="text-xs text-blue-800 mt-1">
                                        {type.advantages.map((adv, advIdx) => (
                                          <li key={advIdx}>• {adv}</li>
                                        ))}
                                      </ul>
                                    </div>
                                    <div>
                                      <span className="text-xs font-medium text-blue-900">Disadvantages:</span>
                                      <ul className="text-xs text-blue-800 mt-1">
                                        {type.disadvantages.map((dis, disIdx) => (
                                          <li key={disIdx}>• {dis}</li>
                                        ))}
                                      </ul>
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
                                  <p className="text-green-800 text-sm mb-3">{module.practiceContent.backupRestoreDifference.backup.description}</p>
                                  <ul className="text-sm text-green-700 space-y-1">
                                    {module.practiceContent.backupRestoreDifference.backup.characteristics.map((char, idx) => (
                                      <li key={idx}>• {char}</li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="bg-purple-50 rounded-lg p-4">
                                  <h5 className="font-semibold text-purple-900 mb-2">{module.practiceContent.backupRestoreDifference.restore.title}</h5>
                                  <p className="text-purple-800 text-sm mb-3">{module.practiceContent.backupRestoreDifference.restore.description}</p>
                                  <ul className="text-sm text-purple-700 space-y-1">
                                    {module.practiceContent.backupRestoreDifference.restore.characteristics.map((char, idx) => (
                                      <li key={idx}>• {char}</li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Step by Step for Module 1 */}
                          {module.id === 'module1' && module.practiceContent.stepByStep && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Step-by-Step Procedures:</h4>
                              
                              {/* Server Side Setup */}
                              <div className="bg-yellow-50 rounded-lg p-4 mb-4">
                                <h5 className="font-semibold text-yellow-900 mb-2">{module.practiceContent.stepByStep.serverSide.title}</h5>
                                <ol className="list-decimal list-inside space-y-2 text-yellow-800">
                                  {module.practiceContent.stepByStep.serverSide.steps.map((step, idx) => (
                                    <li key={idx}>{step}</li>
                                  ))}
                                </ol>
                              </div>

                              {/* Client Side Setup */}
                              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                                <h5 className="font-semibold text-blue-900 mb-2">{module.practiceContent.stepByStep.clientSide.title}</h5>
                                <ol className="list-decimal list-inside space-y-2 text-blue-800">
                                  {module.practiceContent.stepByStep.clientSide.steps.map((step, idx) => (
                                    <li key={idx}>{step}</li>
                                  ))}
                                </ol>
                              </div>

                              {/* Backup Configuration */}
                              <div className="bg-green-50 rounded-lg p-4 mb-4">
                                <h5 className="font-semibold text-green-900 mb-2">{module.practiceContent.stepByStep.backupConfiguration.title}</h5>
                                <ol className="list-decimal list-inside space-y-2 text-green-800">
                                  {module.practiceContent.stepByStep.backupConfiguration.steps.map((step, idx) => (
                                    <li key={idx}>{step}</li>
                                  ))}
                                </ol>
                              </div>

                              {/* Restore Procedure */}
                              <div className="bg-purple-50 rounded-lg p-4">
                                <h5 className="font-semibold text-purple-900 mb-2">{module.practiceContent.stepByStep.restoreProcedure.title}</h5>
                                <ol className="list-decimal list-inside space-y-2 text-purple-800">
                                  {module.practiceContent.stepByStep.restoreProcedure.steps.map((step, idx) => (
                                    <li key={idx}>{step}</li>
                                  ))}
                                </ol>
                              </div>
                            </div>
                          )}

                          {/* Printer Sharing for Module 2 */}
                          {module.id === 'module2' && module.practiceContent.printerSharing && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Printer Sharing Configuration:</h4>
                              <div className="bg-orange-50 rounded-lg p-4">
                                <h5 className="font-semibold text-orange-900 mb-2">{module.practiceContent.printerSharing.title}</h5>
                                <p className="text-orange-800 mb-3">{module.practiceContent.printerSharing.description}</p>
                                <ol className="list-decimal list-inside space-y-2 text-orange-800">
                                  {module.practiceContent.printerSharing.steps.map((step, idx) => (
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

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden">
            <div className="p-3 sm:p-4 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 pr-2">Module Video Tutorial</h3>
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
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src={selectedVideo.includes('youtu.be') 
                    ? `https://www.youtube.com/embed/${selectedVideo.split('youtu.be/')[1].split('?')[0]}`
                    : selectedVideo.replace('watch?v=', 'embed/').split('&')[0]
                  }
                  title="Module Video Tutorial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-900 mb-2">Video Description:</h4>
                <p className="text-gray-600">Watch the video tutorial for this module to learn the concepts and procedures.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
} 