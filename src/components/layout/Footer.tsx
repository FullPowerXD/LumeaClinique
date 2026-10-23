import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

import { departments } from '@/data/departments';
import { site } from '@/data/site';
import { Link as NavLink } from '@/i18n/navigation';

import Logo from '@/components/common/Logo';

export default async function Footer() {
  const t = await getTranslations();
  const year = new Date().getFullYear();

  const socials = [
    { href: site.social.instagram, label: 'Instagram', Icon: Instagram },
    { href: site.social.facebook, label: 'Facebook', Icon: Facebook },
    { href: site.social.linkedin, label: 'LinkedIn', Icon: Linkedin },
    { href: site.social.youtube, label: 'YouTube', Icon: Youtube }
  ];

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl"
      />

      <div className="container-luxe relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/65">
              {t('footer.tagline')}
            </p>

            <ul className="mt-8 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <a
                  href={site.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold-200"
                >
                  {site.address.full}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold-400" />
                <a
                  href={`tel:${site.contact.phoneHref}`}
                  dir="ltr"
                  className="transition-colors hover:text-gold-200"
                >
                  {site.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold-400" />
                <a
                  href={site.contact.emailHref}
                  className="transition-colors hover:text-gold-200"
                >
                  {site.contact.email}
                </a>
              </li>
            </ul>

            <div className="mt-8 flex items-center gap-2.5">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-400 hover:border-gold-400 hover:text-gold-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            <FooterColumn
              title={t('footer.departments')}
              links={departments.map((d) => ({
                href: `/departements/${d.slug}`,
                label: d.name
              }))}
            />
            <FooterColumn
              title={t('footer.clinic')}
              links={[
                { href: '/a-propos', label: t('nav.about') },
                { href: '/galerie', label: t('nav.gallery') },
                { href: '/vip', label: t('nav.vip') },
                { href: '/praticiens', label: t('nav.practitioners') }
              ]}
            />
            <FooterColumn
              title={t('footer.help')}
              links={[
                { href: '/infos-pratiques', label: t('footer.practical') },
                { href: '/rendez-vous', label: t('common.bookAppointment') },
                { href: '/contact', label: t('footer.contact') },
                { href: '/mentions-legales', label: t('footer.legal') },
                { href: '/confidentialite', label: t('legal.privacy') },
                { href: '/cookies', label: t('legal.cookies') },
                { href: '/conditions', label: t('legal.tiers') }
              ]}
            />
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
            <p>
              © {year} {site.legalName}. {t('footer.rightsReserved')}
            </p>
            <p className="max-w-xl md:text-end">{t('footer.medicalDisclaimer')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="text-2xs font-semibold uppercase tracking-[0.24em] text-gold-400">
        {title}
      </h3>
      <ul className="mt-5 space-y-3 text-sm text-white/65">
        {links.map((link) => (
          <li key={link.href}>
            <NavLink
              href={link.href}
              className="transition-colors duration-300 hover:text-gold-200"
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
