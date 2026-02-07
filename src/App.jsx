import { useState, useEffect } from 'react'
import { nationalParksData, quizQuestions } from './data'

function App() {
  const [mode, setMode] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [score, setScore] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState([])
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [filter, setFilter] = useState('all')
  const [masteredCards, setMasteredCards] = useState([])
  const [showNavigator, setShowNavigator] = useState(false)
  const [showCardNavigator, setShowCardNavigator] = useState(false)
  const [cardNavTab, setCardNavTab] = useState('all')

  useEffect(() => {
    // Load progress from localStorage
    const saved = localStorage.getItem('npProgress')
    if (saved) {
      const data = JSON.parse(saved)
      setMasteredCards(data.masteredCards || [])
    }

    // Load quiz state from localStorage
    const savedQuiz = localStorage.getItem('npQuizState')
    if (savedQuiz) {
      const quizData = JSON.parse(savedQuiz)
      if (mode === 'quiz') {
        setCurrentIndex(quizData.currentIndex || 0)
        setScore(quizData.score || 0)
        setQuizAnswers(quizData.quizAnswers || [])
      }
    }
  }, [mode])

  const saveProgress = (mastered) => {
    localStorage.setItem('npProgress', JSON.stringify({
      masteredCards: mastered
    }))
  }

  const saveQuizState = (index, currentScore, answers) => {
    localStorage.setItem('npQuizState', JSON.stringify({
      currentIndex: index,
      score: currentScore,
      quizAnswers: answers
    }))
  }

  const resetQuiz = () => {
    localStorage.removeItem('npQuizState')
    setCurrentIndex(0)
    setScore(0)
    setQuizAnswers([])
    setSelectedAnswer(null)
    setShowResult(false)
  }

  const resetMode = () => {
    setMode(null)
    setCurrentIndex(0)
    setFlipped(false)
    setScore(0)
    setQuizAnswers([])
    setSelectedAnswer(null)
    setShowResult(false)
  }

  const handleFlashcardClick = () => {
    setFlipped(!flipped)
  }

  const nextCard = () => {
    if (currentIndex < getFilteredParks().length - 1) {
      setCurrentIndex(currentIndex + 1)
      setFlipped(false)
    }
  }

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      setFlipped(false)
    }
  }

  const markAsMastered = () => {
    const park = getFilteredParks()[currentIndex]
    
    // Toggle mastered state
    if (masteredCards.includes(park.name)) {
      // Unmark/revert
      const updated = masteredCards.filter(name => name !== park.name)
      setMasteredCards(updated)
      saveProgress(updated)
    } else {
      // Mark as mastered
      const updated = [...masteredCards, park.name]
      setMasteredCards(updated)
      saveProgress(updated)
      nextCard()
    }
  }

  const handleQuizAnswer = (answerIndex) => {
    // Allow changing answer before moving to next question
    if (quizAnswers[currentIndex]) {
      // Already answered this question, update the answer
      const newAnswers = [...quizAnswers]
      const correct = quizQuestions[currentIndex].correct === answerIndex
      
      // Update score
      const oldCorrect = newAnswers[currentIndex].correct
      let newScore = score
      if (oldCorrect && !correct) newScore-- // Was correct, now wrong
      if (!oldCorrect && correct) newScore++ // Was wrong, now correct
      
      newAnswers[currentIndex] = {
        question: currentIndex,
        selected: answerIndex,
        correct: correct
      }
      
      setQuizAnswers(newAnswers)
      setScore(newScore)
      setSelectedAnswer(answerIndex)
      saveQuizState(currentIndex, newScore, newAnswers)
      return
    }
    
    // First time answering this question
    setSelectedAnswer(answerIndex)
    const correct = quizQuestions[currentIndex].correct === answerIndex
    
    const newScore = correct ? score + 1 : score
    const newAnswers = [...quizAnswers, {
      question: currentIndex,
      selected: answerIndex,
      correct: correct
    }]
    
    if (correct) {
      setScore(newScore)
    }
    
    setQuizAnswers(newAnswers)
    saveQuizState(currentIndex, newScore, newAnswers)
  }

  const nextQuizQuestion = () => {
    if (currentIndex < quizQuestions.length - 1) {
      const nextIndex = currentIndex + 1
      setCurrentIndex(nextIndex)
      // Load previous answer if exists
      if (quizAnswers[nextIndex]) {
        setSelectedAnswer(quizAnswers[nextIndex].selected)
      } else {
        setSelectedAnswer(null)
      }
      saveQuizState(nextIndex, score, quizAnswers)
    } else if (quizAnswers.length === quizQuestions.length) {
      // All questions answered, show result
      setShowResult(true)
      localStorage.removeItem('npQuizState')
    }
  }

  const prevQuizQuestion = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1
      setCurrentIndex(prevIndex)
      // Load previous answer
      if (quizAnswers[prevIndex]) {
        setSelectedAnswer(quizAnswers[prevIndex].selected)
      } else {
        setSelectedAnswer(null)
      }
      saveQuizState(prevIndex, score, quizAnswers)
    }
  }

  const getFilteredParks = () => {
    if (filter === 'all') return nationalParksData
    if (filter === 'unesco') return nationalParksData.filter(p => p.category === 'unesco')
    if (filter === 'high') return nationalParksData.filter(p => p.importance === 'HIGH')
    if (filter === 'tiger') return nationalParksData.filter(p => p.category === 'tiger')
    if (filter === 'unique') return nationalParksData.filter(p => p.category === 'unique')
    if (filter === 'marine') return nationalParksData.filter(p => p.category === 'marine')
    if (filter === 'biodiversity') return nationalParksData.filter(p => p.category === 'biodiversity')
    if (filter === 'endangered') return nationalParksData.filter(p => p.category === 'endangered')
    if (filter === 'historic') return nationalParksData.filter(p => p.category === 'historic')
    if (filter === 'mangrove') return nationalParksData.filter(p => p.category === 'mangrove')
    return nationalParksData
  }

  // Get filter counts
  const getFilterCounts = () => {
    return {
      all: nationalParksData.length,
      unesco: nationalParksData.filter(p => p.category === 'unesco').length,
      high: nationalParksData.filter(p => p.importance === 'HIGH').length,
      tiger: nationalParksData.filter(p => p.category === 'tiger').length,
      unique: nationalParksData.filter(p => p.category === 'unique').length,
      marine: nationalParksData.filter(p => p.category === 'marine').length,
      biodiversity: nationalParksData.filter(p => p.category === 'biodiversity').length,
      endangered: nationalParksData.filter(p => p.category === 'endangered').length,
      historic: nationalParksData.filter(p => p.category === 'historic').length,
      mangrove: nationalParksData.filter(p => p.category === 'mangrove').length
    }
  }

  const getScoreEmoji = () => {
    const percentage = (score / quizQuestions.length) * 100
    if (percentage >= 90) return '🏆'
    if (percentage >= 75) return '🌟'
    if (percentage >= 60) return '👍'
    if (percentage >= 50) return '😊'
    return '📚'
  }

  const renderModeSelector = () => (
    <div className="mode-selector">
      <div className="mode-card" onClick={() => setMode('flashcards')}>
        <div className="mode-icon">🗂️</div>
        <h3>Flashcards</h3>
        <p>Quick revision with flashcards. Perfect for memorizing key facts!</p>
      </div>
      
      <div className="mode-card" onClick={() => setMode('quiz')}>
        <div className="mode-icon">❓</div>
        <h3>Quiz Mode</h3>
        <p>Test your knowledge with MCQ questions. Track your score!</p>
      </div>
      
      <div className="mode-card" onClick={() => setMode('list')}>
        <div className="mode-icon">📋</div>
        <h3>Complete List</h3>
        <p>Browse all national parks with detailed information.</p>
      </div>
      
      <div className="mode-card" onClick={() => setMode('stats')}>
        <div className="mode-icon">📊</div>
        <h3>Progress</h3>
        <p>View your learning progress and mastered cards.</p>
      </div>
    </div>
  )

  const renderFlashcards = () => {
    const parks = getFilteredParks()
    const counts = getFilterCounts()
    if (parks.length === 0) return <p>No parks match this filter.</p>
    
    const park = parks[currentIndex]

    return (
      <div>
        <div className="filter-section">
          <h3>Filter Parks</h3>
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => { setFilter('all'); setCurrentIndex(0); }}
            >
              All ({counts.all})
            </button>
            <button 
              className={`filter-btn ${filter === 'unesco' ? 'active' : ''}`}
              onClick={() => { setFilter('unesco'); setCurrentIndex(0); }}
            >
              UNESCO ({counts.unesco})
            </button>
            <button 
              className={`filter-btn ${filter === 'high' ? 'active' : ''}`}
              onClick={() => { setFilter('high'); setCurrentIndex(0); }}
            >
              High Priority ({counts.high})
            </button>
            <button 
              className={`filter-btn ${filter === 'tiger' ? 'active' : ''}`}
              onClick={() => { setFilter('tiger'); setCurrentIndex(0); }}
            >
              Tiger Reserves ({counts.tiger})
            </button>
            <button 
              className={`filter-btn ${filter === 'unique' ? 'active' : ''}`}
              onClick={() => { setFilter('unique'); setCurrentIndex(0); }}
            >
              Unique Features ({counts.unique})
            </button>
            <button 
              className={`filter-btn ${filter === 'marine' ? 'active' : ''}`}
              onClick={() => { setFilter('marine'); setCurrentIndex(0); }}
            >
              Marine Parks ({counts.marine})
            </button>
            <button 
              className={`filter-btn ${filter === 'biodiversity' ? 'active' : ''}`}
              onClick={() => { setFilter('biodiversity'); setCurrentIndex(0); }}
            >
              Biodiversity ({counts.biodiversity})
            </button>
            <button 
              className={`filter-btn ${filter === 'endangered' ? 'active' : ''}`}
              onClick={() => { setFilter('endangered'); setCurrentIndex(0); }}
            >
              Endangered Species ({counts.endangered})
            </button>
          </div>
        </div>

        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{width: `${((currentIndex + 1) / parks.length) * 100}%`}}
          />
        </div>

        {/* Card Navigator Button */}
        <div style={{textAlign: 'center', margin: '15px 0'}}>
          <button 
            className="btn btn-secondary"
            onClick={() => setShowCardNavigator(true)}
            style={{fontSize: '0.95rem'}}
          >
            🗂️ Card Navigator ({masteredCards.length}/{nationalParksData.length} mastered)
          </button>
        </div>

        {/* Card Navigator Modal */}
        {showCardNavigator && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            padding: '20px'
          }} onClick={() => setShowCardNavigator(false)}>
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '30px',
              maxWidth: '800px',
              maxHeight: '85vh',
              overflow: 'auto',
              width: '100%',
              boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
            }} onClick={(e) => e.stopPropagation()}>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px'
              }}>
                <h3 style={{margin: 0}}>Card Navigator</h3>
                <button 
                  onClick={() => setShowCardNavigator(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    padding: '5px 10px'
                  }}
                >
                  ✕
                </button>
              </div>

              {/* Tabs */}
              <div style={{
                display: 'flex',
                gap: '10px',
                marginBottom: '20px',
                borderBottom: '2px solid #e5e7eb'
              }}>
                <button
                  onClick={() => setCardNavTab('all')}
                  style={{
                    padding: '10px 20px',
                    background: 'none',
                    border: 'none',
                    borderBottom: cardNavTab === 'all' ? '3px solid #8b5cf6' : '3px solid transparent',
                    cursor: 'pointer',
                    fontWeight: cardNavTab === 'all' ? 'bold' : 'normal',
                    color: cardNavTab === 'all' ? '#8b5cf6' : '#666',
                    fontSize: '0.95rem'
                  }}
                >
                  All Parks
                </button>
                <button
                  onClick={() => setCardNavTab('state')}
                  style={{
                    padding: '10px 20px',
                    background: 'none',
                    border: 'none',
                    borderBottom: cardNavTab === 'state' ? '3px solid #8b5cf6' : '3px solid transparent',
                    cursor: 'pointer',
                    fontWeight: cardNavTab === 'state' ? 'bold' : 'normal',
                    color: cardNavTab === 'state' ? '#8b5cf6' : '#666',
                    fontSize: '0.95rem'
                  }}
                >
                  By State
                </button>
                <button
                  onClick={() => setCardNavTab('unmastered')}
                  style={{
                    padding: '10px 20px',
                    background: 'none',
                    border: 'none',
                    borderBottom: cardNavTab === 'unmastered' ? '3px solid #8b5cf6' : '3px solid transparent',
                    cursor: 'pointer',
                    fontWeight: cardNavTab === 'unmastered' ? 'bold' : 'normal',
                    color: cardNavTab === 'unmastered' ? '#8b5cf6' : '#666',
                    fontSize: '0.95rem'
                  }}
                >
                  Unmastered Only
                </button>
              </div>

              {/* Tab Content */}
              <div style={{maxHeight: '50vh', overflow: 'auto'}}>
                {/* All Parks Tab */}
                {cardNavTab === 'all' && (
                  <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                    {nationalParksData.map((p, idx) => {
                      const isMastered = masteredCards.includes(p.name)
                      const isCurrent = parks[currentIndex]?.name === p.name
                      return (
                        <div
                          key={idx}
                          onClick={() => {
                            const parkIndex = parks.findIndex(park => park.name === p.name)
                            if (parkIndex !== -1) {
                              setCurrentIndex(parkIndex)
                              setFlipped(false)
                              setShowCardNavigator(false)
                            }
                          }}
                          style={{
                            padding: '12px 15px',
                            background: isCurrent ? '#e9d5ff' : (isMastered ? '#d1fae5' : 'white'),
                            border: isCurrent ? '2px solid #8b5cf6' : '1px solid #e5e7eb',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            transition: 'all 0.2s'
                          }}
                          onMouseEnter={(e) => {
                            if (!isCurrent) e.currentTarget.style.background = '#f3f4f6'
                          }}
                          onMouseLeave={(e) => {
                            if (!isCurrent) e.currentTarget.style.background = isMastered ? '#d1fae5' : 'white'
                          }}
                        >
                          <div>
                            <strong>{p.name}</strong>
                            <div style={{fontSize: '0.85rem', color: '#666'}}>{p.state}</div>
                          </div>
                          {isMastered && <span style={{fontSize: '1.2rem'}}>✓</span>}
                        </div>
                      )
                    })}
                  </div>
                )}

                {/* By State Tab */}
                {cardNavTab === 'state' && (() => {
                  const byState = {}
                  nationalParksData.forEach(p => {
                    if (!byState[p.state]) byState[p.state] = []
                    byState[p.state].push(p)
                  })
                  const sortedStates = Object.keys(byState).sort()
                  
                  return (
                    <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                      {sortedStates.map(state => (
                        <div key={state}>
                          <h4 style={{
                            marginBottom: '8px',
                            color: '#8b5cf6',
                            fontSize: '1rem',
                            fontWeight: 'bold'
                          }}>
                            {state} ({byState[state].length})
                          </h4>
                          <div style={{display: 'flex', flexDirection: 'column', gap: '6px', marginLeft: '10px'}}>
                            {byState[state].map((p, idx) => {
                              const isMastered = masteredCards.includes(p.name)
                              const isCurrent = parks[currentIndex]?.name === p.name
                              return (
                                <div
                                  key={idx}
                                  onClick={() => {
                                    const parkIndex = parks.findIndex(park => park.name === p.name)
                                    if (parkIndex !== -1) {
                                      setCurrentIndex(parkIndex)
                                      setFlipped(false)
                                      setShowCardNavigator(false)
                                    }
                                  }}
                                  style={{
                                    padding: '10px 12px',
                                    background: isCurrent ? '#e9d5ff' : (isMastered ? '#d1fae5' : 'white'),
                                    border: isCurrent ? '2px solid #8b5cf6' : '1px solid #e5e7eb',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    fontSize: '0.9rem',
                                    transition: 'all 0.2s'
                                  }}
                                  onMouseEnter={(e) => {
                                    if (!isCurrent) e.currentTarget.style.background = '#f3f4f6'
                                  }}
                                  onMouseLeave={(e) => {
                                    if (!isCurrent) e.currentTarget.style.background = isMastered ? '#d1fae5' : 'white'
                                  }}
                                >
                                  <span>{p.name}</span>
                                  {isMastered && <span style={{fontSize: '1rem'}}>✓</span>}
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  )
                })()}

                {/* Unmastered Only Tab */}
                {cardNavTab === 'unmastered' && (() => {
                  const unmastered = nationalParksData.filter(p => !masteredCards.includes(p.name))
                  return (
                    <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                      {unmastered.length === 0 ? (
                        <p style={{textAlign: 'center', color: '#666', padding: '20px'}}>
                          🎉 Congratulations! You've mastered all cards!
                        </p>
                      ) : (
                        unmastered.map((p, idx) => {
                          const isCurrent = parks[currentIndex]?.name === p.name
                          return (
                            <div
                              key={idx}
                              onClick={() => {
                                const parkIndex = parks.findIndex(park => park.name === p.name)
                                if (parkIndex !== -1) {
                                  setCurrentIndex(parkIndex)
                                  setFlipped(false)
                                  setShowCardNavigator(false)
                                }
                              }}
                              style={{
                                padding: '12px 15px',
                                background: isCurrent ? '#e9d5ff' : 'white',
                                border: isCurrent ? '2px solid #8b5cf6' : '1px solid #e5e7eb',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                              }}
                              onMouseEnter={(e) => {
                                if (!isCurrent) e.currentTarget.style.background = '#f3f4f6'
                              }}
                              onMouseLeave={(e) => {
                                if (!isCurrent) e.currentTarget.style.background = 'white'
                              }}
                            >
                              <div>
                                <strong>{p.name}</strong>
                                <div style={{fontSize: '0.85rem', color: '#666'}}>{p.state}</div>
                              </div>
                            </div>
                          )
                        })
                      )}
                    </div>
                  )
                })()}
              </div>

              <div style={{marginTop: '20px', textAlign: 'center'}}>
                <button 
                  className="btn btn-primary"
                  onClick={() => setShowCardNavigator(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="flashcard">
          <div 
            className={`flashcard-inner ${flipped ? 'flipped' : ''}`}
            onClick={handleFlashcardClick}
          >
            <div className="flashcard-front">
              <h2>{park.name}</h2>
              <p style={{fontSize: '1.5rem', marginTop: '20px'}}>📍 {park.state}</p>
              <p className="flashcard-hint">👆 Tap to flip</p>
            </div>
            <div className="flashcard-back">
              <h2>Details</h2>
              <p><strong>Established:</strong> {park.established}</p>
              <p><strong>Famous for:</strong> {park.famous}</p>
              <p><strong>Key Fauna:</strong> {park.fauna.join(', ')}</p>
              <p><strong>Features:</strong> {park.features.join(', ')}</p>
            </div>
          </div>
        </div>

        <div className="controls">
          <button 
            className="btn btn-secondary" 
            onClick={prevCard}
            disabled={currentIndex === 0}
          >
            ⬅️ Previous
          </button>
          
          <button 
            className="btn btn-primary" 
            onClick={markAsMastered}
          >
            {masteredCards.includes(park.name) ? '✓ Mastered (click to unmark)' : '✓ Mark as Mastered'}
          </button>
          
          <button 
            className="btn btn-secondary" 
            onClick={nextCard}
            disabled={currentIndex === parks.length - 1}
          >
            Next ➡️
          </button>
        </div>

        <div style={{textAlign: 'center', marginTop: '20px', color: '#666'}}>
          Card {currentIndex + 1} of {parks.length}
        </div>
      </div>
    )
  }

  const renderQuiz = () => {
    if (showResult) {
      const percentage = ((score / quizQuestions.length) * 100).toFixed(0)
      
      return (
        <div className="result-screen">
          <div className="result-emoji">{getScoreEmoji()}</div>
          <h2>Quiz Complete!</h2>
          <div className="result-score">
            {score} / {quizQuestions.length}
          </div>
          <p style={{fontSize: '1.5rem', color: '#666', marginBottom: '30px'}}>
            You scored {percentage}%
          </p>
          
          <div style={{textAlign: 'left', marginBottom: '30px'}}>
            <h3 style={{marginBottom: '15px'}}>Review:</h3>
            {quizAnswers.map((answer, idx) => (
              <div key={idx} style={{
                padding: '15px',
                marginBottom: '10px',
                background: answer.correct ? '#d1fae5' : '#fee2e2',
                borderRadius: '8px'
              }}>
                <p style={{fontWeight: 'bold', marginBottom: '5px'}}>
                  Q{idx + 1}: {quizQuestions[idx].question}
                </p>
                <p style={{color: '#666'}}>
                  {answer.correct ? '✓ Correct!' : `✗ Wrong - ${quizQuestions[idx].explanation}`}
                </p>
              </div>
            ))}
          </div>

          <div className="controls">
            <button className="btn btn-primary" onClick={() => {
              setShowResult(false)
              setCurrentIndex(0)
              setScore(0)
              setQuizAnswers([])
              setSelectedAnswer(null)
            }}>
              🔄 Retry Quiz
            </button>
            <button className="btn btn-secondary" onClick={resetMode}>
              🏠 Back to Home
            </button>
          </div>
        </div>
      )
    }

    const question = quizQuestions[currentIndex]

    const jumpToQuestion = (index) => {
      setCurrentIndex(index)
      if (quizAnswers[index]) {
        setSelectedAnswer(quizAnswers[index].selected)
      } else {
        setSelectedAnswer(null)
      }
      saveQuizState(index, score, quizAnswers)
      setShowNavigator(false) // Close modal after selecting
    }

    return (
      <div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{width: `${(quizAnswers.length / quizQuestions.length) * 100}%`}}
          />
        </div>

        {/* Navigator Button */}
        <div style={{textAlign: 'center', margin: '15px 0'}}>
          <button 
            className="btn btn-secondary"
            onClick={() => setShowNavigator(true)}
            style={{fontSize: '0.95rem'}}
          >
            📋 Question Navigator ({quizAnswers.length}/{quizQuestions.length})
          </button>
        </div>

        {/* Modal Overlay */}
        {showNavigator && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            padding: '20px'
          }} onClick={() => setShowNavigator(false)}>
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '30px',
              maxWidth: '700px',
              maxHeight: '80vh',
              overflow: 'auto',
              width: '100%',
              boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
            }} onClick={(e) => e.stopPropagation()}>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px'
              }}>
                <h3 style={{margin: 0}}>Question Navigator</h3>
                <button 
                  onClick={() => setShowNavigator(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    padding: '5px 10px'
                  }}
                >
                  ✕
                </button>
              </div>

              <div style={{
                display: 'flex',
                gap: '15px',
                marginBottom: '20px',
                fontSize: '0.9rem',
                flexWrap: 'wrap'
              }}>
                <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                  <div style={{width: '20px', height: '20px', background: '#d1fae5', border: '2px solid #10b981', borderRadius: '4px'}}></div>
                  <span>Correct</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                  <div style={{width: '20px', height: '20px', background: '#fee2e2', border: '2px solid #ef4444', borderRadius: '4px'}}></div>
                  <span>Wrong</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                  <div style={{width: '20px', height: '20px', background: 'white', border: '2px solid #e5e7eb', borderRadius: '4px'}}></div>
                  <span>Unanswered</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                  <div style={{width: '20px', height: '20px', background: '#e9d5ff', border: '3px solid #8b5cf6', borderRadius: '4px'}}></div>
                  <span>Current</span>
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(50px, 1fr))',
                gap: '10px'
              }}>
                {quizQuestions.map((_, idx) => {
                  const isAnswered = quizAnswers[idx] !== undefined
                  const isCurrent = idx === currentIndex
                  const isCorrect = isAnswered && quizAnswers[idx].correct
                  
                  return (
                    <button
                      key={idx}
                      onClick={() => jumpToQuestion(idx)}
                      style={{
                        padding: '12px',
                        border: isCurrent ? '3px solid #8b5cf6' : '2px solid #e5e7eb',
                        borderRadius: '8px',
                        background: isCurrent 
                          ? '#e9d5ff'
                          : isAnswered 
                            ? (isCorrect ? '#d1fae5' : '#fee2e2')
                            : 'white',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        fontWeight: isCurrent ? 'bold' : 'normal',
                        color: '#333',
                        transition: 'all 0.2s',
                        borderColor: isAnswered && !isCurrent
                          ? (isCorrect ? '#10b981' : '#ef4444')
                          : (isCurrent ? '#8b5cf6' : '#e5e7eb')
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.05)'
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)'
                      }}
                    >
                      {idx + 1}
                    </button>
                  )
                })}
              </div>

              <div style={{marginTop: '20px', textAlign: 'center'}}>
                <button 
                  className="btn btn-primary"
                  onClick={() => setShowNavigator(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="quiz-question">
          <h3>Question {currentIndex + 1} of {quizQuestions.length}</h3>
          <p style={{fontSize: '1.3rem', marginBottom: '30px', color: '#333'}}>
            {question.question}
          </p>

          <div className="quiz-options">
            {question.options.map((option, idx) => {
              let className = 'quiz-option'
              if (selectedAnswer !== null) {
                if (idx === question.correct) {
                  className += ' correct'
                } else if (idx === selectedAnswer) {
                  className += ' incorrect'
                }
              }

              return (
                <div
                  key={idx}
                  className={className}
                  onClick={() => handleQuizAnswer(idx)}
                >
                  <strong>{String.fromCharCode(65 + idx)}.</strong> {option}
                </div>
              )
            })}
          </div>

          {selectedAnswer !== null && (
            <div style={{
              marginTop: '20px',
              padding: '20px',
              background: selectedAnswer === question.correct ? '#d1fae5' : '#fee2e2',
              borderRadius: '12px'
            }}>
              <p style={{fontWeight: 'bold', marginBottom: '10px'}}>
                {selectedAnswer === question.correct ? '✓ Correct!' : '✗ Incorrect'}
              </p>
              <p>{question.explanation}</p>
            </div>
          )}
        </div>

        <div style={{textAlign: 'center', marginTop: '20px', color: '#666'}}>
          Score: {score} / {quizAnswers.length}
        </div>

        <div className="controls" style={{marginTop: '20px'}}>
          <button 
            className="btn btn-secondary" 
            onClick={prevQuizQuestion}
            disabled={currentIndex === 0}
          >
            ⬅️ Previous
          </button>
          
          <button 
            className="btn btn-primary" 
            onClick={nextQuizQuestion}
            disabled={currentIndex === quizQuestions.length - 1 && quizAnswers.length < quizQuestions.length}
          >
            {currentIndex === quizQuestions.length - 1 && quizAnswers.length === quizQuestions.length ? '✓ Finish Quiz' : 'Next ➡️'}
          </button>
        </div>

        <div className="controls" style={{marginTop: '10px'}}>
          <button className="btn btn-secondary" onClick={resetQuiz}>
            🔄 Reset Quiz
          </button>
          <button className="btn btn-secondary" onClick={resetMode}>
            🏠 Back to Home
          </button>
        </div>
      </div>
    )
  }

  const renderList = () => {
    const parks = getFilteredParks()
    const counts = getFilterCounts()

    return (
      <div>
        <div className="filter-section">
          <h3>Filter Parks</h3>
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All ({counts.all})
            </button>
            <button 
              className={`filter-btn ${filter === 'unesco' ? 'active' : ''}`}
              onClick={() => setFilter('unesco')}
            >
              UNESCO ({counts.unesco})
            </button>
            <button 
              className={`filter-btn ${filter === 'high' ? 'active' : ''}`}
              onClick={() => setFilter('high')}
            >
              High Priority ({counts.high})
            </button>
            <button 
              className={`filter-btn ${filter === 'tiger' ? 'active' : ''}`}
              onClick={() => setFilter('tiger')}
            >
              Tiger Reserves ({counts.tiger})
            </button>
            <button 
              className={`filter-btn ${filter === 'marine' ? 'active' : ''}`}
              onClick={() => setFilter('marine')}
            >
              Marine Parks ({counts.marine})
            </button>
            <button 
              className={`filter-btn ${filter === 'unique' ? 'active' : ''}`}
              onClick={() => setFilter('unique')}
            >
              Unique ({counts.unique})
            </button>
            <button 
              className={`filter-btn ${filter === 'biodiversity' ? 'active' : ''}`}
              onClick={() => setFilter('biodiversity')}
            >
              Biodiversity ({counts.biodiversity})
            </button>
          </div>
        </div>

        <div className="list-view">
          {parks.map((park, idx) => (
            <div key={idx} className="park-card">
              <h4>{park.name}</h4>
              <div className="state">📍 {park.state} • Established: {park.established}</div>
              <div className="details">
                <p><strong>Famous for:</strong> {park.famous}</p>
                <p><strong>Key Fauna:</strong> {park.fauna.join(', ')}</p>
                <p><strong>Features:</strong> {park.features.join(', ')}</p>
              </div>
              <div className="tags">
                <span className="tag">{park.importance}</span>
                <span className="tag">{park.category}</span>
                {masteredCards.includes(park.name) && <span className="tag">✓ Mastered</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderStats = () => {
    const totalParks = nationalParksData.length
    const unescoCount = nationalParksData.filter(p => p.category === 'unesco').length
    const highPriority = nationalParksData.filter(p => p.importance === 'HIGH').length
    const masteredCount = masteredCards.length
    const progress = ((masteredCount / totalParks) * 100).toFixed(0)

    return (
      <div>
        <h2 style={{marginBottom: '30px', color: '#333'}}>Your Progress</h2>
        
        <div className="stats">
          <div className="stat-card">
            <h4>Total Parks</h4>
            <div className="value">{totalParks}</div>
          </div>
          <div className="stat-card">
            <h4>UNESCO Sites</h4>
            <div className="value">{unescoCount}</div>
          </div>
          <div className="stat-card">
            <h4>High Priority</h4>
            <div className="value">{highPriority}</div>
          </div>
          <div className="stat-card">
            <h4>Mastered</h4>
            <div className="value">{masteredCount}</div>
          </div>
        </div>

        <div style={{marginBottom: '30px'}}>
          <h3 style={{marginBottom: '15px', color: '#333'}}>Overall Progress</h3>
          <div className="progress-bar" style={{height: '30px'}}>
            <div 
              className="progress-fill" 
              style={{
                width: `${progress}%`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold'
              }}
            >
              {progress}%
            </div>
          </div>
        </div>

        {masteredCards.length > 0 && (
          <div>
            <h3 style={{marginBottom: '15px', color: '#333'}}>Mastered Parks</h3>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
              {masteredCards.map((name, idx) => (
                <span key={idx} className="tag" style={{fontSize: '1rem', padding: '8px 16px'}}>
                  ✓ {name}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="controls" style={{marginTop: '30px'}}>
          <button 
            className="btn btn-danger" 
            onClick={() => {
              if (confirm('Are you sure you want to reset all progress?')) {
                setMasteredCards([])
                localStorage.removeItem('npProgress')
              }
            }}
          >
            🔄 Reset Progress
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <h1>🏞️ National Parks UPSC Prep</h1>
          <p>Master all 107 National Parks for UPSC Prelims</p>
        </div>

        {!mode && renderModeSelector()}

        {mode && (
          <div className="content-area">
            <button 
              className="btn btn-secondary" 
              onClick={resetMode}
              style={{marginBottom: '20px'}}
            >
              ← Back to Home
            </button>

            {mode === 'flashcards' && renderFlashcards()}
            {mode === 'quiz' && renderQuiz()}
            {mode === 'list' && renderList()}
            {mode === 'stats' && renderStats()}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
