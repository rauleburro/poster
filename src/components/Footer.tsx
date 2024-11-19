import React from "react";
import { Container } from "@/components/Container";

export function Footer() {
  const navigation = ["Product", "Features", "Pricing", "Company", "Blog"];
  const legal = ["Terms", "Privacy", "Legal"];
  return (
    <div className="relative">
      <Container>
        <div className="flex flex-1 flex-col max-w-screen-xl gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700">
          <div className="">
            <div>
              <h2 className="text-xl font-medium text-blue dark:text-gray-100">
                Referencias bibliográficas
              </h2>
              <ul className="mt-4 text-gray-500 dark:text-gray-400 space-y-2">
                <li>
                  Mohamed, A. S., et al. (2016). Upper airway muscle exercises
                  outcome in patients with obstructive sleep apnea syndrome.
                  Egyptian Journal Of Chest Diseases And Tuberculosis, 66(1),
                  121-125.{" "}
                  <a
                    href="https://doi.org/10.1016/j.ejcdt.2016.08.014"
                    target="_blank"
                    rel="noopener"
                    className="text-secondary hover:text-tertiary"
                  >
                    https://doi.org/10.1016/j.ejcdt.2016.08.014
                  </a>
                </li>
                <li>
                  Erturk, N., et al. (2020). The effectiveness of oropharyngeal
                  exercises compared to inspiratory muscle training in
                  obstructive sleep apnea: A randomized controlled trial. Heart
                  & Lung, 49(6), 940-948.{" "}
                  <a
                    href="https://doi.org/10.1016/j.hrtlng.2020.07.014"
                    target="_blank"
                    rel="noopener"
                    className="text-secondary hover:text-tertiary"
                  >
                    https://doi.org/10.1016/j.hrtlng.2020.07.014
                  </a>
                </li>
                <li>
                  Vranish, J. R., & Bailey, E. F. (2016). Inspiratory Muscle
                  Training Improves Sleep and Mitigates Cardiovascular
                  Dysfunction in Obstructive Sleep Apnea. SLEEP, 39(6),
                  1179-1185.{" "}
                  <a
                    href="https://doi.org/10.5665/sleep.5826"
                    target="_blank"
                    rel="noopener"
                    className="text-secondary hover:text-tertiary"
                  >
                    https://doi.org/10.5665/sleep.5826
                  </a>
                </li>
                <li>
                  Marzouqah, R., et al. (2024). Strengthening oropharyngeal
                  muscles as an approach to treat post-stroke obstructive sleep
                  apnea: A feasibility randomised controlled trial. Journal of
                  Sleep Research, 33(4), e14086.{" "}
                  <a
                    href="https://doi.org/10.1111/jsr.14086"
                    target="_blank"
                    rel="noopener"
                    className="text-secondary hover:text-tertiary"
                  >
                    https://doi.org/10.1111/jsr.14086
                  </a>
                </li>
                <li>
                  Puhan, M. A., et al. (2006). Didgeridoo playing as alternative
                  treatment for obstructive sleep apnoea syndrome: randomised
                  controlled trial. Clinical Otolaryngology, 31(3), 214.{" "}
                  <a
                    href="https://doi.org/10.1111/j.1749-4486.2006.01184.x"
                    target="_blank"
                    rel="noopener"
                    className="text-secondary hover:text-tertiary"
                  >
                    https://doi.org/10.1111/j.1749-4486.2006.01184.x
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="">
            <div>Follow us</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              <a
                href="https://youtube.com/@antonellagonzalezcaballero"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only">Youtube</span>
                <YouTubeIcon />
              </a>
              <a
                href="https://linkedin.com/in/antonella-gonzalez-100ab9234"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only">Linkedin</span>
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

const Linkedin = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
  </svg>
);

const YouTubeIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export default YouTubeIcon;
