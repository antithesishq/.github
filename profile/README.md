## What is Antithesis?

Antithesis is a **continuous reliability platform** that **autonomously searches** for problems in your software within a **simulated environment**. Every problem we find can be **perfectly reproduced**, allowing for **efficient debugging** of even the most complex problems.

#### Continuous reliability platform

Antithesis is a cloud platform that continuously tests the reliability of software systems. As your developers write code, they push their software (as container images) to Antithesis. We run your software under a variety of conditions, and report any unintended behavior. We test your system against a multitude of predefined properties, and also work with your team to define additional test properties specific to your system.

#### Autonomous searching

Each time your developers push new code, Antithesis starts running it and searching for problems. As your system runs, faults (such as network retries, thread hangs, or node restarts) are artificially injected, and your software's behavior is analyzed. When Antithesis notices interesting or rare behavior, it makes a copy of the system state and explores many possible futures from that point.

Any path that increases code coverage, or produces rare log messages, is more intensely explored. This branching happens many thousands of times in each test run.

#### Simulated environment

Antithesis performs each test run in a simulated environment, which we provision and manage automatically. This environment contains your entire service architecture, and uses virtualization to simulate all hardware and network components in the system. Customer production systems are never involved, so intense fault-injection can be performed with no risk of downtime.

#### 100% reproducibility

The Antithesis simulation environment is fully deterministic (meaning any state in a test run can always be reached again), so all problems it finds can always be reproduced. This means that there are no flaky tests, and that rare production mysteries can be pinned down and diagnosed. Not only is the moment of the problem recorded, every moment leading up to the problem can also be replayed. This remains true even weeks or months after the test run.

#### Efficient debugging

Antithesis's perfect determinism allows for truly unique debugging methods. These include the ability to arbitrarily rewind time from the moment of an incident, change inputs, examine system state, or enable additional logging. Moreover, counterfactual histories of the issue can be explored, like slightly perturbing the history and seeing if the issue still occurs. This massively accelerates root-cause analysis and increases developer velocity.
