'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Loader2 } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';

import { departments } from '@/data/departments';
import { insurances } from '@/data/insurances';
import { practitioners } from '@/data/practitioners';
import { cn } from '@/lib/utils';

interface FormState {
  name: string;
  email: string;
  phone: string;
  department: string;
  practitioner: string;
  reason: string;
  preferredDate: string;
  preferredTime: string;
  insurance: string;
  notes: string;
  consent: boolean;
}

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  department: '',
  practitioner: '',
  reason: '',
  preferredDate: '',
  preferredTime: '',
  insurance: '',
  notes: '',
  consent: false
};

const steps = ['step1', 'step2', 'step3'] as const;

export default function AppointmentForm() {
  const t = useTranslations('appointment');
  const tc = useTranslations('common');

  const [step, setStep] = useState(0);
  const [values, setValues] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const practitionersForDepartment = useMemo(
    () =>
      values.department
        ? practitioners.filter((p) => p.departmentSlug === values.department)
        : practitioners,
    [values.department]
  );

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setValues((current) => ({ ...current, [key]: value }));
  };

  const canContinueStep1 = values.name.trim().length > 1 && /\S+@\S+\.\S+/.test(values.email);

  const submit = async () => {
    setStatus('sending');

    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-4xl border border-ink-line/70 bg-white p-10 text-center shadow-soft md:p-14"
      >
        <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold-50">
          <Check className="h-7 w-7 text-gold-500" />
        </span>
        <h3 className="mt-7 font-display text-2xl text-ink">{t('step3Title')}</h3>
        <p className="body-luxe mx-auto mt-4 max-w-lg">{t('step3Text')}</p>
        <button
          type="button"
          onClick={() => {
            setValues(initialState);
            setStep(0);
            setStatus('idle');
          }}
          className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-gold-600"
        >
          {t('another')}
        </button>
      </motion.div>
    );
  }

  const fieldClass =
    'w-full rounded-2xl border border-ink-line bg-white px-5 py-3.5 text-sm text-ink outline-none transition-colors duration-400 focus:border-gold-400';

  return (
    <div className="rounded-4xl border border-ink-line/70 bg-white p-7 shadow-soft md:p-11">
      <ol className="flex items-center gap-3" aria-label={t('step1')}>
        {steps.map((key, index) => (
          <li key={key} className="flex flex-1 items-center gap-3">
            <span
              className={cn(
                'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition-colors duration-400',
                index === step
                  ? 'border-gold-400 bg-gold-50 text-gold-600'
                  : index < step
                    ? 'border-gold-400 bg-gold-400 text-white'
                    : 'border-ink-line text-ink-mute'
              )}
            >
              {index < step ? <Check className="h-4 w-4" /> : index + 1}
            </span>
            <span
              className={cn(
                'hidden text-xs uppercase tracking-[0.16em] sm:block',
                index === step ? 'text-ink' : 'text-ink-mute'
              )}
            >
              {t(key)}
            </span>
            {index < steps.length - 1 ? (
              <span aria-hidden className="h-px flex-1 bg-ink-line/70" />
            ) : null}
          </li>
        ))}
      </ol>

      <div className="mt-10">
        <h3 className="font-display text-2xl text-ink">
          {step === 0 ? t('step1Title') : step === 1 ? t('step2Title') : t('step3Title')}
        </h3>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7"
        >
          {step === 0 ? (
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="label-field">{tc('name')}</span>
                <input
                  type="text"
                  value={values.name}
                  onChange={(event) => update('name', event.target.value)}
                  className={fieldClass}
                  required
                />
              </label>
              <label className="block">
                <span className="label-field">{tc('email')}</span>
                <input
                  type="email"
                  value={values.email}
                  onChange={(event) => update('email', event.target.value)}
                  className={fieldClass}
                  required
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="label-field">{tc('phone')}</span>
                <input
                  type="tel"
                  value={values.phone}
                  onChange={(event) => update('phone', event.target.value)}
                  className={fieldClass}
                />
              </label>
            </div>
          ) : null}

          {step === 1 ? (
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="label-field">{t('department')}</span>
                <select
                  value={values.department}
                  onChange={(event) => {
                    update('department', event.target.value);
                    update('practitioner', '');
                  }}
                  className={fieldClass}
                >
                  <option value="">{tc('all')}</option>
                  {departments.map((department) => (
                    <option key={department.slug} value={department.slug}>
                      {department.name}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="label-field">{t('practitioner')}</span>
                <select
                  value={values.practitioner}
                  onChange={(event) => update('practitioner', event.target.value)}
                  className={fieldClass}
                >
                  <option value="">{t('practitionerAny')}</option>
                  {practitionersForDepartment.map((practitioner) => (
                    <option key={practitioner.id} value={practitioner.slug}>
                      {practitioner.name}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block sm:col-span-2">
                <span className="label-field">{t('reason')}</span>
                <textarea
                  rows={3}
                  value={values.reason}
                  onChange={(event) => update('reason', event.target.value)}
                  placeholder={t('reasonPlaceholder')}
                  className={fieldClass}
                />
              </label>

              <label className="block">
                <span className="label-field">{t('preferredDate')}</span>
                <input
                  type="date"
                  value={values.preferredDate}
                  onChange={(event) => update('preferredDate', event.target.value)}
                  className={fieldClass}
                />
              </label>

              <label className="block">
                <span className="label-field">{t('preferredTime')}</span>
                <select
                  value={values.preferredTime}
                  onChange={(event) => update('preferredTime', event.target.value)}
                  className={fieldClass}
                >
                  <option value="">{tc('all')}</option>
                  <option value="morning">{t('morning')}</option>
                  <option value="afternoon">{t('afternoon')}</option>
                </select>
              </label>

              <label className="block">
                <span className="label-field">{t('insurance')}</span>
                <select
                  value={values.insurance}
                  onChange={(event) => update('insurance', event.target.value)}
                  className={fieldClass}
                >
                  <option value="">{tc('all')}</option>
                  <option value="none">{t('insuranceNone')}</option>
                  {insurances.map((insurance) => (
                    <option key={insurance.id} value={insurance.slug}>
                      {insurance.name}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="label-field">{t('notes')}</span>
                <input
                  type="text"
                  value={values.notes}
                  onChange={(event) => update('notes', event.target.value)}
                  placeholder={t('notesPlaceholder')}
                  className={fieldClass}
                />
              </label>
            </div>
          ) : null}

          {step === 2 ? (
            <div className="space-y-6">
              <dl className="divide-y divide-ink-line/60 rounded-3xl border border-ink-line/70 bg-ivory/40 px-6">
                <div className="flex items-center justify-between py-4 text-sm">
                  <dt className="text-ink-mute">{tc('name')}</dt>
                  <dd className="font-medium text-ink">{values.name}</dd>
                </div>
                <div className="flex items-center justify-between py-4 text-sm">
                  <dt className="text-ink-mute">{tc('email')}</dt>
                  <dd className="font-medium text-ink">{values.email}</dd>
                </div>
                {values.phone ? (
                  <div className="flex items-center justify-between py-4 text-sm">
                    <dt className="text-ink-mute">{tc('phone')}</dt>
                    <dd className="font-medium text-ink">{values.phone}</dd>
                  </div>
                ) : null}
                <div className="flex items-center justify-between py-4 text-sm">
                  <dt className="text-ink-mute">{t('department')}</dt>
                  <dd className="font-medium text-ink">
                    {departments.find((d) => d.slug === values.department)?.name ?? 'â€”'}
                  </dd>
                </div>
                <div className="flex items-center justify-between py-4 text-sm">
                  <dt className="text-ink-mute">{t('practitioner')}</dt>
                  <dd className="font-medium text-ink">
                    {practitioners.find((p) => p.slug === values.practitioner)?.name ??
                      t('practitionerAny')}
                  </dd>
                </div>
                {values.preferredDate ? (
                  <div className="flex items-center justify-between py-4 text-sm">
                    <dt className="text-ink-mute">{t('preferredDate')}</dt>
                    <dd className="font-medium text-ink">{values.preferredDate}</dd>
                  </div>
                ) : null}
              </dl>

              <label className="flex cursor-pointer items-start gap-3 text-sm text-ink-soft">
                <input
                  type="checkbox"
                  checked={values.consent}
                  onChange={(event) => update('consent', event.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-[#D4AF37]"
                />
                <span>{t('consent')}</span>
              </label>

              <p className="rounded-2xl border border-gold-200 bg-gold-50 px-5 py-4 text-xs leading-relaxed text-gold-700">
                {t('urgentNote')}
              </p>
            </div>
          ) : null}
        </motion.div>
      </AnimatePresence>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-ink-line/70 pt-7">
        <button
          type="button"
          onClick={() => setStep((current) => Math.max(0, current - 1))}
          disabled={step === 0 || status === 'sending'}
          className="inline-flex items-center gap-2 rounded-full border border-ink-line px-7 py-3.5 text-sm font-medium text-ink transition-all duration-400 hover:border-gold-400 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ArrowLeft className="h-4 w-4" />
          {tc('back')}
        </button>

        {step < 2 ? (
          <button
            type="button"
            onClick={() => setStep((current) => Math.min(2, current + 1))}
            disabled={step === 0 && !canContinueStep1}
            className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-3.5 text-sm font-semibold text-white transition-all duration-500 ease-luxe hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-40"
          >
            {tc('next')}
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={submit}
            disabled={!values.consent || status === 'sending'}
            className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-3.5 text-sm font-semibold text-white transition-all duration-500 ease-luxe hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-40"
          >
            {status === 'sending' ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                {tc('sending')}
              </>
            ) : (
              tc('submit')
            )}
          </button>
        )}
      </div>
    </div>
  );
}
