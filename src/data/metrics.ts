export interface ImpactMetric {
  value: string;
  label: string;
  /**
   * Optional count-up config for the home-page strip. The server-rendered
   * value is always the source of truth; the animation is progressive
   * enhancement only.
   */
  count?: { to: number; prefix?: string; suffix?: string };
}

/** Metrics drift, so date-stamp them (see personal-website-plan.md §6). */
export const metricsAsOf = 'October 2026';

/** The five headline metrics for the home-page impact strip. */
export const impactMetrics: ImpactMetric[] = [
  { value: 'Days → self-serve', label: 'report delivery — customers generate their own, no engineering queue' },
  { value: '½ day → 2 min', label: 'template maintenance, via automation' },
  { value: '20+ GB', label: 'largest report, streamed straight to S3', count: { to: 20, suffix: '+ GB' } },
  { value: '~2–2.5M', label: 'data-ingestion events per day' },
  { value: '~60%', label: 'fewer event-processing failures', count: { to: 60, prefix: '~', suffix: '%' } },
];

/** Supporting metrics — shown on the résumé and case studies, not the strip. */
export const additionalMetrics: ImpactMetric[] = [
  { value: '100/100', label: 'Lighthouse — all four categories (Japan Travel)' },
  { value: '>50%', label: 'reduction in infrastructure allocation' },
];
