import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import App from '../../App';
import EmailTemplate from './emailTemplate/emailTemplate';
import { fetchTemplates } from '../services/templates';

export const Routes = () => {
  const [templates, setTemplates] = useState<string[]>([]);
  
  useEffect(() => {
    let mounted = true;

    fetchTemplates()
      .then((data: string[]) => {
        if(mounted) { setTemplates(data) }
      });

    return () => {
      mounted = false;
    };
  }, []);

  return(
    <Switch>
      <Route exact path="/" component={App} />
      {
        // After fetching templates, create a route per template
        templates.map((templateId: String, idx: number) =>
          <Route key={idx} path={`/${templateId}`}>
            <EmailTemplate templateId={`${templateId}`} />
          </Route>
        )
      }
    </Switch>
  )
}