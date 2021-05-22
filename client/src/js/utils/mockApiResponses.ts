export const mockGetTemplatesResponse: string[] = [
  'registration-confirmation.tmp',
  'tax-documents-ready.tmp',
  'exercise-approval.tmp'
];

export const mockRegistrationConfirmationResponse: string = '<html>\n    <head>\n    <style type=\"text/css\">\n        body {\n            font-family: Tahoma, sans-serif;\n            background-color: #EEE;\n            color: #333;\n        }\n\n        h1 {\n            color: #02A1FE;\n        }\n    </style>\n    </head>\n    <body>\n        <h1>Welcome to {{ company.name }}! {{ user.name }}</h1>\n        <p>\n            Please visit <a href=\"{{ confirmation.url }}\">this link</a> to confirm your account.\n        </p>\n    </body>\n</html>\n\n';

export const mockTaxDocumentsReadyResponse: string = '<html>\n    <head>\n    <style type=\"text/css\">\n        body {\n            font-family: Tahoma, sans-serif;\n            background-color: #EEE;\n            color: #333;\n        }\n\n        h1 {\n            color: #02A1FE;\n        }\n    </style>\n    </head>\n    <body>\n        <h1>Tax documents available</h1>\n        <p>\n            New tax documents were generated for <a href=\"{{ portfolio.url }}\">{{portfolio.url}}</a>.\n            Visit the portfolio to download the files.\n        </p>\n    </body>\n</html>\n\n';

export const mockExerciseApproval: string = '<html>\n    <head>\n    <style type=\"text/css\">\n        body {\n            font-family: Tahoma, sans-serif;\n            background-color: #EEE;\n            color: #333;\n        }\n\n        h1 {\n            color: #02A1FE;\n        }\n    </style>\n    </head>\n    <body>\n        <h1>Your exercise was approved</h1>\n        <p>\n            Your exercise with {{ exercise.grant.issuer.name }} on grant {{ exercise.grant.label }} has been approved.\n            Visit {{ exercise.url }} to see next steps.\n        </p>\n    </body>\n</html>\n\n';