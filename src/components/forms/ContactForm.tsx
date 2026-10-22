'use client';

import { Check, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('contact.form');
  const tContact = useTranslations('contact');
  const tc = useTranslations('common');

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const update = (key: keyof typeof values, value: string) => {
    setValues((current) => ({ ...current, [key]: value }));
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');

    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus('success');
      setValues({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const fieldClass =
    'w-full rounded-2xl border border-ink-line bg-white px-5 py-3.5 text-sm text-ink outline-none transition-colors duration-400 focus:border-gold-400';

  if (status === 'success') {
    return (
      <div className="rounded-4xl border border-ink-line/70 bg-white p-10 text-center shadow-soft">
        <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold-50">
          <Check className="h-7 w-7 text-gold-500" />
        </span>
        <h3 className="mt-7 font-display text-2xl text-ink">{tContact('success')}</h3>
        <p className="body-luxe mx-auto mt-3 max-w-md">{t('text')}</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-gold-600"
        >
          {tc('contactUs')}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-4xl border border-ink-line/70 bg-white p-7 shadow-soft md:p-10"
    >
      <h2 className="font-display text-2xl text-ink">{t('title')}</h2>
      <p className="mt-3 text-sm text-ink-soft">{t('text')}</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="label-field">{t('name')}</span>
          <input
            type="text"
            required
            value={values.name}
            onChange={(event) => update('name', event.target.value)}
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className="label-field">{t('email')}</span>
          <input
            type="email"
            required
            value={values.email}
            onChange={(event) => update('email', event.target.value)}
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className="label-field">{t('phone')}</span>
          <input
            type="tel"
            value={values.phone}
            onChange={(event) => update('phone', event.target.value)}
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className="label-field">{t('subject')}</span>
          <input
            type="text"
            value={values.subject}
            onChange={(event) => update('subject', event.target.value)}
            placeholder={t('subjectPlaceholder')}
            className={fieldClass}
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="label-field">{t('message')}</span>
          <textarea
            rows={5}
            required
            value={values.message}
            onChange={(event) => update('message', event.target.value)}
            placeholder={t('messagePlaceholder')}
            className={fieldClass}
          />
        </label>
      </div>

      {status === 'error' ? (
        <p className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
          {tContact('error')}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-sm font-semibold text-white transition-all duration-500 ease-luxe hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === 'sending' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {tc('sending')}
          </>
        ) : (
          t('send')
        )}
      </button>
    </form>
  );
}
