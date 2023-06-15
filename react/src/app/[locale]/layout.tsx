'use client';
import './globals.css';
import { ContentfulLivePreview } from '@contentful/live-preview';
import Link from 'next/link';

import { CounterContextProvider } from '@/src/context/counter.context';

import { languages } from '../i18n/settings';

import { hopsTheme } from '@fui/themes/base-themes';
import { UiThemeProvider } from '@fui/themes/provider';

export async function generateStaticParams() {
  return languages.map(locale => ({ locale }));
}

export default function RootLayout(props: { children: React.ReactNode; params: any }) {
  ContentfulLivePreview.init({ locale: props.params.locale }); // Should be probably move to layout
  const [lang] = props.params.locale.split('-');
  return (
    <html lang={lang}>
      <body>
        <UiThemeProvider theme={{ ...hopsTheme, linkComponent: Link }}>
          <CounterContextProvider>{props.children}</CounterContextProvider>
        </UiThemeProvider>
      </body>
    </html>
  );
}
