'use client'

import { useState } from 'react'
import { moduleQuizzes } from '@/content/quizzes'
import { trackEvent } from '@/lib/analytics'

export default function ModuleQuiz({ cocId }: { cocId: 'coc1' | 'coc2' | 'coc3' | 'coc4' }) {
  const questions = moduleQuizzes[cocId]
  const [answers, setAnswers] = useState<number[]>(() => questions.map(() => -1))
  const [submitted, setSubmitted] = useState(false)
  const score = questions.reduce((total, question, index) => total + (answers[index] === question.answer ? 1 : 0), 0)

  return (
    <section className="mt-12 rounded-lg border border-gray-200 bg-white p-6 text-gray-900">
      <h3 className="text-xl font-semibold text-gray-900 mb-1">Knowledge check</h3>
      <p className="text-sm text-gray-700 mb-6">Pick one answer per question. You can change a choice until you check.</p>
      <ol className="space-y-6">
        {questions.map((question, index) => (
          <li key={question.id}>
            <p className="font-semibold text-gray-900 mb-3">{index + 1}. {question.prompt}</p>
            <div className="space-y-2">
              {question.choices.map((choice, choiceIndex) => {
                const selected = answers[index] === choiceIndex
                const correct = submitted && choiceIndex === question.answer
                const wrong = submitted && selected && choiceIndex !== question.answer
                const letter = String.fromCharCode(65 + choiceIndex)
                return (
                  <label
                    key={choice}
                    className={`flex items-start gap-3 rounded-lg border px-3 py-3 cursor-pointer ${
                      correct
                        ? 'border-green-600 bg-green-50'
                        : wrong
                          ? 'border-red-600 bg-red-50'
                          : selected
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-white'
                    } ${submitted ? 'cursor-default' : ''}`}
                  >
                    <input
                      type="radio"
                      name={`${cocId}-${question.id}`}
                      disabled={submitted}
                      checked={selected}
                      className="mt-1 h-4 w-4 shrink-0 accent-blue-600"
                      onChange={() =>
                        setAnswers((current) => current.map((value, i) => (i === index ? choiceIndex : value)))
                      }
                    />
                    <span className="min-w-6 font-semibold text-gray-800">{letter}.</span>
                    <span className="flex-1 text-base leading-snug text-gray-900">{choice}</span>
                    {correct ? <span className="text-sm font-semibold text-green-800">Correct</span> : null}
                    {wrong ? <span className="text-sm font-semibold text-red-800">Your answer</span> : null}
                  </label>
                )
              })}
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="button"
          disabled={submitted || answers.includes(-1)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium disabled:opacity-50"
          onClick={() => {
            setSubmitted(true)
            trackEvent('quiz_complete', { coc_id: cocId, score, total: questions.length })
          }}
        >
          Check answers
        </button>
        {submitted ? (
          <>
            <p className="font-semibold text-gray-900">Score: {score} / {questions.length}</p>
            <button
              type="button"
              className="text-blue-700 font-medium hover:underline"
              onClick={() => {
                setAnswers(questions.map(() => -1))
                setSubmitted(false)
              }}
            >
              Try again
            </button>
          </>
        ) : (
          <p className="text-sm text-gray-700">
            {answers.filter((value) => value >= 0).length} of {questions.length} answered
          </p>
        )}
      </div>
    </section>
  )
}
