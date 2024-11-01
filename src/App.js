// App.js
import React from 'react';
import { OctagonX, Clock, Users, Target, Microscope, ArrowRight, BrainCircuit } from 'lucide-react';
import './App.css';
import { Dna } from 'lucide-react';


const Panel = ({ title, children, className }) => (
  <div className={`panel ${className}`}>
    <h3 className="panel-title">{title}</h3>
    {children}
  </div>
);


const OpportunityPanel = () => (
  <Panel title={<span style={{ fontSize: '1.75rem', fontFamily: 'Helvetica, sans-serif', position: 'relative', top: '-0.5rem' }}>Opportunity<Dna className="panel-icon" style={{ width: '1.5rem', height: '1.5rem', marginLeft: '0.5rem', verticalAlign: 'middle' }} /></span>} className="opportunity-panel">
    <div className="opportunity-content" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <div className="opportunity-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'linear-gradient(to bottom, #f5f7fa 0%, #c3cfe2 100%)', borderRadius: '0.5rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', position: 'relative', flex: 1, maxWidth: '500px' }}>
        <div className="opportunity-reason" style={{ textAlign: 'left', color: '#1a202c', fontSize: '1.1rem', fontFamily: 'Helvetica, sans-serif', fontWeight: 'bold', padding: '0 1rem', maxWidth: '350px', wordWrap: 'break-word' }}>
          <ul>
            <li>Large existing population<br />genetics databases</li>
            <li>Combine pharmacology and genomics expertise</li>
            <li>Pangenomics for complex variation</li>
            <li>Pharmacology data</li>
          </ul>
        </div>
      </div>
    </div>
  </Panel>
);



const ChallengePanel = () => (
  <Panel title="Current Challenge" className="challenge-panel">
    <div className="challenge-layout">
      <div className="challenge-stats" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div className="stat" style={{ textAlign: 'center', background: '#f0f4f8', padding: '1rem', borderRadius: '0.5rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <OctagonX className="panel-icon" style={{ marginBottom: '0.5rem' }} />
          <span className="stat-number" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#c53030' }}>90%</span>
          <span className="stat-label" style={{ display: 'block', marginTop: '0.5rem', color: '#2d3748' }}>Clinical Trial Failure Rate</span>
        </div>
        <div className="stat" style={{ textAlign: 'center', background: '#f0f4f8', padding: '1rem', borderRadius: '0.5rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Dollar_Sign.svg/2048px-Dollar_Sign.svg.png"
            alt="Dollar Sign"
            className="panel-icon"
            style={{ width: '2rem', height: '2rem', marginBottom: '0.5rem' }}
          />
          <span className="stat-number" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#c53030' }}>$2.6B</span>
          <span className="stat-label" style={{ display: 'block', marginTop: '0.5rem', color: '#2d3748' }}>Cost per Drug</span>
        </div>
      </div>
    </div>
  </Panel>
);

const InnovationPanel = () => (
  <Panel title="Genomic Drug Targeting" className="innovation-panel">
    <div className="innovation-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', padding: '2rem' }}>
      <div className="genomics-section" style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', padding: '3rem 1rem 1rem 1rem', borderRadius: '0.5rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', position: 'relative' }}>
        <img
          src="https://svgsilh.com/svg/1500067.svg"
          alt="DNA Helix"
          className="panel-icon"
          style={{
            width: '6rem',
            height: '6rem',
            position: 'absolute',
            top: '0.8rem',
            left: '-0.3rem',
            zIndex: 2,
            maskImage: 'linear-gradient(to bottom, black 30%, transparent 60%)'
          }}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/6295/6295407.png"
          alt="Database"
          className="panel-icon"
          style={{ width: '3rem', height: '3rem', position: 'absolute', zIndex: 1 }}
        />
        <div className="text-label" style={{ fontSize: '1.25rem', fontWeight: '600', color: '#2d3748', marginLeft: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'calc(100% - 3rem)', transform: 'translateY(-13px)' }}>Population Genomics</div>
      </div>
      <div className="plus-symbol" style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2d3748', margin: '0' }}>+</div>
      <div className="pharmacology-section" style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)', padding: '1rem', borderRadius: '0.5rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <img
          src="https://www.svgrepo.com/show/384581/analysis-health-hospital-medical-recipe-report.svg"
          alt="Pharmacology data and expertise"
          className="panel-icon"
          style={{ width: '3rem', height: '3rem' }}
        />
        <div className="text-label" style={{ fontSize: '1.25rem', fontWeight: '600', color: '#2d3748' }}>Pharmacology Data Integration</div>
      </div>
      <div className="equals-symbol" style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2d3748', margin: '0' }}>=</div>
      <div className="pharma-section" style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)', padding: '1rem', borderRadius: '0.5rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <img
          src="https://static.thenounproject.com/png/3827738-200.png"
          alt="Pharma drug research"
          className="panel-icon"
          style={{ width: '3rem', height: '3rem' }}
        />
        <div className="text-label" style={{ fontSize: '1.25rem', fontWeight: '600', color: '#2d3748' }}>Target Discovery</div>
      </div>
    </div>
  </Panel>
);

const ImpactPanel = () => (
  <Panel className="impact-panel">
    <div className="impact-content" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
      <div className="impact-visual" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', width: '100%', maxWidth: '600px' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2d3748', textAlign: 'center' }}>
          Impact
        </div>
      </div>
      <div className="impact-metrics" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', marginTop: '1.5rem', width: '100%', maxWidth: '500px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%' }}>
          <Clock className="panel-icon" style={{ width: '2.5rem', height: '2.5rem', color: '#d4a35a' }} />
          <div className="text-label" style={{ fontSize: '1.1rem', color: '#2d3748' }}>Accelerated Discovery</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%' }}>
          <Users className="panel-icon" style={{ width: '2.5rem', height: '2.5rem', color: '#6dbf8a' }} />
          <div className="text-label" style={{ fontSize: '1.1rem', color: '#2d3748' }}>Patient Outcomes</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%' }}>
          <BrainCircuit className="panel-icon" style={{ width: '2.5rem', height: '2.5rem', color: '#8cc3c3' }} />
          <div className="text-label" style={{ fontSize: '1.1rem', color: '#2d3748' }}>Improved Drug Target Prediction</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%' }}>
          <Microscope className="panel-icon" style={{ width: '2.5rem', height: '2.5rem', color: '#e07b7b' }} />
          <div className="text-label" style={{ fontSize: '1.1rem', color: '#2d3748' }}>Higher Trial Success Rates</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%' }}>
          <Target className="panel-icon" style={{ width: '2.5rem', height: '2.5rem', color: '#d49ab8' }} />
          <div className="text-label" style={{ fontSize: '1.1rem', color: '#2d3748' }}>New Therapeutic Targets</div>
        </div>
      </div>
    </div>
  </Panel>
);

const App = () => {
  return (
    <div className="abstract-container">
      <h1 className="main-title" style={{ color: '#2d3748', fontSize: '2rem' }}>
        Population Genomics for Improved Drug Target Discovery
      </h1>

      <div className="panels-container" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <ChallengePanel />
          <OpportunityPanel />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <img src="https://www.svgrepo.com/show/10506/up-arrows-fusion-in-one.svg" alt="Up Arrows Fusion" className="connector-arrow" style={{ width: '2.5rem', height: '2.5rem', color: '#4a5568', alignSelf: 'center', transform: 'rotate(90deg)' }} />
        </div>
        <InnovationPanel />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <ArrowRight className="connector-arrow" style={{ color: '#4a5568', alignSelf: 'center' }} />
        </div>
        <ImpactPanel />
      </div>
    </div>
  );
};

export default App;
