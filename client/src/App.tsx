import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { fetchTemplates } from './js/services/templates';

import './assets/styles/app.scss';

export default function App() {
  const [templates, setTemplates] = useState<string[]>([]);
  
  useEffect(() => {
    let mounted = true;
    console.log("App mounting...");

    fetchTemplates()
      .then((data: string[]) => {
        if(mounted) {
          setTemplates(data);
        }
      });

    return () => {
      mounted = false;
      console.log("App unmounting...");
    };
  }, []);

  return (
    <div className="App app-container">
      <section className="app-container__left-panel">
        <div className="app-container__header">
          <h4>Email Templates</h4>
        </div>
        <ul className="app-container__body">
          {
            templates.map((templateId: String, idx: number) => {
              return <li key={idx}>
                <Link to={`/${templateId}`}>{ templateId }</Link>
              </li>
            })
          }
        </ul>
      </section>
      <section className="app-container__right-panel"></section>
    </div>
  );
}
