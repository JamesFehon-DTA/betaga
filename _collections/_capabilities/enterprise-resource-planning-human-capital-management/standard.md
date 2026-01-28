---
layout: capability-content
style: 'ct-vertical-spacing--bottom ct-basic-content'
description_from_parent: true
parent_path: 'enterprise-resource-planning-human-capital-management'
title: 'Enterprise resource planning (ERP) human capital management (HCM)'
url: '/'
toc: 'toc-util'
content_top: true
aga_code: 'STA43'
type: 'AGA Standard'
---

Human Capital Management (HCM) capability provides the Hire to Retire (H2R) value stream, the lifecycle which manages and supports the course of an individual’s career within the Australian Public Service (APS). It refers to the software and systems designed to manage and optimise the Human Resources (HR) aspects of an entity within the broader framework of an ERP system and delivering the H2R value stream.

HCM integrates various HR functions such as payroll, benefits administration, recruiting, performance management, training, and compliance into a single cohesive platform. HCM streamlines HR processes, improves efficiency, and provides data-driven insights for strategic decision-making related to workforce management. It aims to maximise the potential of an entity’s human capital while ensuring compliance with regulations and alignment with entity goals.

This standard is limited to the HCM sub-capability, and should be viewed within the context of the overarching [Enterprise Resource Planning (ERP) Standard](https://architecture.digital.gov.au/enterprise-resource-planning-standard), and alongside those aligned to the other defined [ERP value streams](https://www.digital.gov.au/initiatives/enterprise-resource-planning/appendices/goverp-technical-assessment-3-goverp-overview):

* [ERP Finance Standard](https://architecture.digital.gov.au/erp-finance-standard)
* [ERP Procurement Standard](https://architecture.digital.gov.au/erp-procurement-standard)
* [ERP Travel and Expense Management System (TEMS) Standard](https://architecture.digital.gov.au/erp-travel-expense-management-system-standard).

A Human Capital Management System (HCMS) can be implemented through several commercial platform solutions. These platforms are currently accessible via BuyICT; Whole-of-Australian-Government contracts; and entity-implemented solutions underpinned by platforms.

HCM is essential for Commonwealth entities to optimise HR processes, foster talent, ensure compliance, and boost employee satisfaction to achieve strategic goals. [The H2R value stream](https://www.digital.gov.au/initiatives/enterprise-resource-planning/appendices/goverp-technical-assessment-3-goverp-overview) serves several critical purposes in Commonwealth entities:

* Boosts efficiency
* Ensures Compliance
* Manages Talent.
* Informs Decision Making
* Enhances Engagement.
* Controls Costs
* Enables Adaptability
* Enhances Reporting.

## Standard statements

Entities should:

* ensure their ERP HCM solution delivers capabilities as specified and defined below
* document their implementation in a way that maps modules to the capabilities and processes specified in this standard, enabling traceability and future reuse.

## Hire to Retire (H2R) value stream

The H2R value stream represents the full lifecycle of employee within the organisation. Within the context of ERP it includes the following capabilities:

* Manager Self-Service
* Employee Self-Service
* Concurrent Employment
* Global Employment
* HR Case Management
* Leave and Absence Management
* Organisational Management
* Employee Management
* Payroll Services
* Work Health and Safety
* Work Time and Attendance / Time Sheet Recording and Management
* Workplace Relations
* On-boarding
* Off-boarding
* Learning Management
* Compensation Management
* Recruitment
* Performance and Goals Management
* Succession and Career Development
* Workforce planning
* Schedule and Rostering

The Reuse Assessment provides a full list of [capabilities and definitions](https://www.digital.gov.au/initiatives/enterprise-resource-planning/appendices/goverp-technical-assessment-3-goverp-overview). Additional details regarding the integration of these capabilities within the ERP are provided below.

### Manager Self-Service

The ability for managers within an entity to initiate, administer or approve entity processes on behalf of their employees. Enables localised reporting functions.

#### Processes and definitions

* **Manage Manager Notifications** regarding the status of applicable business processes.
* **Manage Manager Approvals** which are work items requiring individual or bulk approval steps to be actioned.
* **Organisational Unit Reporting** to provide localised reporting on staff directly reporting to the manager (such as absence calendars).

### Employee Self-Service

The ability for an entity employee or contractor to initiate standard business processes for themselves and includes the ability to view and report on their own data.

#### Processes and definitions

* **Manage Employee Notifications** regarding the status of applicable business processes.
* **Manage Employee Work Items** requiring individual processing to be actioned.

### Concurrent Employment

Concurrent employment enables entities to support multiple, simultaneous employment contracts related to a single or multiple employing entities.

#### Processes and definitions

* **Manage Concurrent Employee Assignments** to record simultaneous employment contracts to the same or different employers.

### Global Employment

Global Employment enables the expatriation and repatriation of entity employees geographically dispersed.

#### Processes and definitions

* **Manage Global Employment** for the repatriation of staff to international locations, including the ability to administer country or region-specific requirements.
* **Manage Country / Region specific conditions** to administer Country or Region-specific conditions of employment (other than calculation of overseas allowances for APS Employees).
* **Manage Country / Region specific compliance** to confirm Country or Region-specific legislative requirements are met.

### HR Case Management

The HR Case Management business capability bridges the gap between a staff member’s performance and the entity’s strategic objectives. This can include conflict resolution capabilities and employee generated grievances. It also requires the ability to understand and manage the case management steps of assessment, planning, facilitation, coordination, monitoring, and evaluation.

#### Processes and definitions

* **Manage APS Code of Conduct Case** enables administration of HR cases which originate through management and contain APS code of conduct breaches. This can include bullying, harassment or fraud use cases.
* **Manage Staff Grievance** related to code of conduct or behavioural concerns, and employee triggered processes relating to peers or colleagues.

### Leave and Absence Management

The Leave and Absence Management capability manages all activities associated with employee leave, processing applications, leave liabilities, advice on entitlements, prior service applications, management of leave types and accruals.

#### Processes and definitions

* **Manage Absences** to create and maintain staff absences including absence reporting functionality.
* **Manage Leave Accruals** to enable the ability to generate or adjust leave accruals and entitlements (leave balances).
* **Manage Prior Service** including the management of individual employment history (to count as service) for both Long Service Leave and cessation processes.
* **Manage Leave Cash Out** to handle the payment of leave balances (subject to enterprise agreement processes) including Flex or Annual Leave Cash Out processes.
* **Manage Purchase Leave** to manage the deductions and balances relating to an individual purchasing leave arrangement. This is inclusive of reconciliation processes and is subject to Enterprise Agreement conditions.

### Organisational Management

The Organisational Management capability maintains positional and organisational structure data that allows the consuming entity leadership and key enabling areas to: effectively support the strategic and operational management of the consuming entity; effectively manage individual staff level attributes that link into position attributes; and satisfy reporting requirements to government, senior leadership, internal and external stakeholders.

#### Processes and definitions

* **Manage Organisational Units Object** and related relationships, attributes, and structures.
* **Manage Positions Object** and related relationships and attributes.
* **Manage Jobs Object** and related relationships and attributes.
* **Manage Job Families Object** and related relationships and attributes. Aligned with Australian Public Service Commission’s [APS Job Family Framework](https://www.apsc.gov.au/initiatives-and-programs/aps-workforce-strategy-2025/workforce-planning-resources/aps-job-family-framework).
* **Manage Additional Attributes / Structures** objects and their related relationships and attributes.

### Employee Management

The Employee Management business capability manages and maintains employee data and personnel records including internal staff movements such as HDA, ongoing / non-ongoing transfer at level, and global and concurrent employment. Employee Management services also include changes to: Legal name, Addresses, Emergency Contacts and Next of Kin, Bank Details and Deductions, Tax Declaration and Tax File Number, Security Clearance, Qualifications, Diversity and Inclusion Details, Employment History and Prior Service.

#### Processes and definitions

* **Manage Employee Data** from both the personal perspective (i.e. addresses or bank details) or HR administrative data (such as contract elements and attributes).
* **Manage Employee Movements (Internal)** relating to (but not limited to), internal movements, internal promotions, return from long term absence and Higher Duties requirements.
* **Manage Employee Movements (External)** relating to (but not limited to) permanent transfers, temporary transfer, and secondments in a new entity.
* **Manage MOG Related Movements** to facilitate the entity changes required relating to Machinery of Government (MOG) movements. This can include Enterprise Agreement adjustment processing.
* **Manage Workers Compensation** to manage the absence reconciliation of workers compensation including graduated return to work conditions and Comcare reconciliations.
* **Manage International Assignments** for the repatriation of staff to international locations. Includes the ability to administer country or region-specific requirements.
* **Manage Concurrent Employee Assignments** enabling the ability to record simultaneous employment contracts to the same or different employers.
* **Manage Operational Reporting** enabling the ability to perform Operational Reporting including (but not limited to) Full-Time Equivalent (FTE), Average Staffing Level (ASL) and legislative reporting through the [APS Employment Database](https://www.apsc.gov.au/initiatives-and-programs/workforce-information/workforce-data/aps-employment-database-apsed) (APSED) reporting.

### Payroll Services

The Payroll Services business capability manages all activities associated with employee conditions and benefits including salary, superannuation, allowances and other benefits and advice on these entitlements, for ongoing, non-ongoing and casual staff. It also includes the ability to manage activities such as costing verifications, on-cycle payroll processing, ad-hoc payroll processing (advances, pay recalls and pay rejects), under and overpayments and transfers in/out of an organisation (leave liabilities, pay term certificate, service history, personnel file). This capability includes legislative reporting requirements (such as Single Touch Payroll and Super Stream).

#### Processes and definitions

* **Manage Deductions** to administer employee pre-tax and post-tax deductions. Includes reconciliation activities.
* **Manage Allowances** to administer additional or recurring payments to employees (including calculation of overseas allowances for APS Employees).
* **Manage Ad-hoc Payments** to process an irregular or ad-hoc payment to an individual employee for the utilisation in an Off-Cycle payroll process.
* **Manage Disbursements** including the distribution of funds to banking institutions (Bank File). Reconciliation activities associated with Accounts Payable processes.
* **Manage Superannuation** to maintain employee superannuation contributions (including employee and Employer Productivity Superannuation Contribution components). Includes Superannuation Fund creation and maintenance.
* **Manage Increments Adjustments** as per Enterprise Agreement or Common conditions, the processing of employee increment movements.
* **Manage Over / Under Payment** to recover or compensate employees that have been under or overpaid, including relevant reconciliation activities.
* **Prepare and Manage Payroll Runs** including pre-payroll validation activities, the creation of payroll results per individual, the correction of errors, and the embedded payroll verification and reconciliation activities.
* **Prepare and Manage Off-Cycle Payments** to manage of the ‘out of cycle’ payroll processes. Includes relevant reconciliation activities.
* **Manage Employee Payroll Data** including the ability to administer payroll related master data for employees.
* **Manage Salary Packaging** to manage employee salary packaging requirements, including the reconciliation and liaison with relevant third-party providers.
* **Manage Single Touch Payroll** including the creation, reconciliation, and lodgement of ATO required data relating to Single Touch Payroll legislative obligations.
* **Manage Payroll Reporting** including the processing of legislative Payroll reporting requirements ensuring regulatory compliance, including (but not limited to) Tax File Number (TFN) Declaration, [SuperStream](https://www.ato.gov.au/businesses-and-organisations/super-for-employers/paying-super-contributions/how-to-pay-super/superstream-for-employers), and Executive Remuneration.
* **Manage Salary Recall** enabling the ability to process and reconcile the rejection of a bank transfer or the process to recall a salary payment from the relevant banking institution.
* **Manage Salary Advancement** relating to Enterprise Agreements, influenced by Performance Management results.

### Work Health and Safety

The Work Health & Safety (WHS) business capability manages relevant legislation, and an entity’s strategy, policy, plans, guidelines, and programs, with the main purpose of compliance, continuous risk management, and providing safe and healthy work and workplaces to workers and other people, including customers. This capability includes receipt and management of data relating to hazards, risks, incidents, conduct and track investigations, record corrective and preventative actions and monitor activities, and ability to report on all other WHS data required by the entity.

#### Processes and definitions

* **Manage Work Health and Safety** to manage the impact of relevant legislation and organisation’s strategy, policy, plans, guidelines, and programs with the main purpose of compliance, continuous risk management, and providing safe and healthy work and workplaces to workers and other people, including customers. These processes include the ability to receive and manage data relating to hazards, risks, incidents, conduct and track investigations, record corrective and preventative actions and monitor activities and be able to output reports on other WHS data required.
* **Manage WHS Training and Qualifications** to maintain WHS specific learning and qualifications catalogues.
* **Manage WHS Roles** to administer and record WHS roles against employees for delegations and workflow processes.
* **Manage WHS Compliance** to allow for the integration to risk registers and alignment to corresponding WHS legislation.
* **Plan WHS Policies** to allow the creation of plans for corrective actions and alignment to the required WHS Policy, plans, procedures & guidelines.
* **Manage Staff Wellbeing Programs** to determine entity wide staff wellbeing programs that can be distributed through employee channels.
* **Manage WHS Related Vendors and Supporting Third Parties** including the administration of the roles and responsibilities of third parties and vendors supporting WHS processes.
* **Report WHS Information** to enable the extraction of case status and corrective actions. Includes workplace inspection reports, risks, hazards, and incidents. Ability to perform analytics on aggregated incident data including the generation of lead and lag Key Performance Indicators (KPIs). Measure Total Recordable Injury Frequency Rate (TRIFR). Identify and report on work-related vs. non-work-related incidents etc.
* **Manage WHS Secretariat** to enable reporting functionality and incident details to WHS executive.
* **Rehabilitation and Health Case Management** including Return to Work, Staff Wellbeing, Work Related Incidents and Injury, Workers Compensation, Early Intervention and Attendance Management.

### Work Time and Attendance / Time Sheet Recording and Management

The Work Time & Attendance capability manages and maintains employee and staff attendance, and how this is evaluated for remuneration purposes through payroll. It also administers planned working time, the recording of actual time worked, the processing of time related earnings such as overtime, and the interpretation of time worked or not worked on special days such as weekends and holidays.

The Time Sheet and Recording Management business capability manages various resources effectively, so the right resources are assigned to the right tasks. This capability includes the ability to administer planned working time, the recording of actual time worked, the processing of time related earnings such as overtime, and the interpretation of time worked or not worked on special days such as weekends and holidays. Managing resources involves schedules and budgets for people and HR related tools and suppliers.

#### Processes and definitions

* **Manage Working Times** including the management of planned working times available to staff. This includes Part Time and Casual work schedules.
* **Manage Timesheet Recording** to administer timesheet conditions and validations. Creation of timesheet profiles for differing staff requirements (e.g. Contractors, Casuals and Employees).
* **Manage and Prepare Time Evaluation** including the creation of time results through the processing of time evaluation programs for individuals or whole entities.
* **Capture Time / Capture Time (Bulk)** to enable the ability to capture time recorded against an activity and allocate to an attendance type (such as Casual Hours or Overtime). This process can be enabled per individual employee or collectively.
* **Manage Timesheet Recording** for the administration of timesheet conditions and validations. Creation of timesheet profiles for differing staff requirements (i.e. Contractors, Casuals and Employees).

### Workplace Relations

The Workplace Relations capability manages and maintains the range of conditions of employment as outlined in the entity’s enterprise agreements and a range or other legislative workplace rights and responsibilities including (but not limited to) those covered by the *Public Service Act 1999*, *Public Service Regulations 1999*, *Public Service Commissioner’s Directions 2016*, *Fair Work Act 2009* and the *Safety Rehabilitation and Compensation Act 1988*.

#### Processes and definitions

* **Develop Agency Enterprise Agreement** through the utilisation of existing entity enterprise agreement conditions to facilitate enterprise agreement discussions with external and internal stakeholders.
* **Manage Agency Enterprise Agreement** to update and maintain entity specific employment conditions as required.
* **Develop HR Policies and Procedures** through the utilisation of existing entity policies and procedures to facilitate enterprise agreement discussions with external and internal stakeholders. Includes application of APSC legislative policy.
* **Manage HR Policies and Procedures** to update and maintain entity specific policies and procedures as required. Includes application of APSC legislative policy.
* **Manage Compliance Activities** to enable the maintenance of a compliance-based standards required for staff management and entity alignment to conditions of service.

### On-Boarding

The On-boarding capability enables the ability to create and maintain accurate new employee information, such as personal payroll data, time, and attendance, as well as the new employee’s contractual arrangements or terms and conditions of employment. This process is underpinned by an accurate organisational management structure and a robust new hire process that allows a seamless transition for the candidate or labour hire worker through the new hire and on-boarding experience, accurately capture and maintain the contractual, and personal data ensuring an efficient on-boarding experience.

#### Processes and definitions

* **Manage Pre-Commencement On-boarding Activities** to seamlessly leverage the information collected during the Recruiting process. Collect all information which is essential for hiring and required for compliance.
* **Manage Commencement** to formally start employment and on the job learning of role and activities. This includes the creation of an employee record in the core HCM application.
* **Manage On-board Agency** including the mass hiring of entity staff as part of entity on-boarding arrangements.
* **Manage Post-Recruit Verification Steps** to enable learning of company processes. Become aware of and start working together with employee stakeholder network. Collect feedback and improvement opportunities for On-boarding experience, including the completion of any outstanding legal/compliance administration. Receipt and confirmation of required employee assets and system access.
* **Manage Orientation Steps** for on-the-job orientation processes including mandatory training requirements.
* **Manage First Working Day** for introduction to the organisation, colleagues, work location and ways of working. Build understanding of key company policies and safety regulations. Creation of positive first working experiences and company impression.
* **Manage Post-Day 1 On-boarding** to become productive in performing role related tasks and activities. Become aware of company culture, rules, and organisational context. Ensure completion of all compliance related activities and requirements.

### Off-Boarding

The Off-boarding capability enables the ability to manage the formal separation of an employee from the organisation through resignation, transfer, retirement, redundancy, death, or termination. The process that takes place includes ceasing salary and entitlements and payment of outstanding annual leave and long service leave entitlements, transferring payroll records to another entity – [S26 transfers/promotions](https://www.apsc.gov.au/working-aps/information-aps-employment/movement/employee-movement-between-aps-agencies), deactivating access rights and passwords, returning any equipment and security passes and conducting exit interviews to gather feedback.

#### Processes and definitions

* **Manage Staff Off-boarding** including management of staff resignations, including (but not limited to) terminations and redundancies.
* **Manage Agency Off-boarding** including the mass cessation of entity staff as part of an entity off-boarding agreement.
* **Manage Pay & Personnel Off-boarding Related Activities** to cover specific payroll components of the cessation process including final monies, leave payments, lump sums, and validation of taxation treatments.
* **Manage Employee Pre-Off-boarding Activities** to prepare for cessation activities including the delimitation of transactional history and personal asset allocation, as well as initiation of Physical and IT security processes.
* **Manage Post Off-boarding Activities** including post exit questionnaires and conduct post exit interviews.

### Learning Management

The Learning Management capability enables the ability to provide a training environment for all staff. This facilitates continuous entity training courses and employee development programs (both internally and externally hosted). Services can include learning plans, learning history and recommendations.

#### Processes and definitions

* **Manage Employee Career Related Learning and Development** to identify suitable learning items in the learning catalogue and assign them to the overview of learning assignments.
* **Manage Development Programs** to identify suitable learning items in the learning catalogue and assign them to the overview of learning assignments, including entry level programs.
* **Manage Internal Coaching and Mentoring** to manage course facilitators and coaches responsible for the delivery of training outcomes.
* **Manage Mandatory Assessments** to indicate mandatory or essential learning catalogues and curriculums to employees and staff. Includes the management of creation of the assessment content and reporting compliance.
* **Develop & Manage Organisational Needs Analysis & Profile** to regularly consolidate learning needs expressed by the entity, top-down (strategy) as well as bottom-up (employees and line managers).
* **Define Organisational Capabilities and Competencies** to define both entity and APSC capabilities and competency frameworks.
* **Develop & Manage Learning & Development Framework** to develop both entity and APSC learning and development hierarchies and catalogues.
* **Conduct Learning and Development Analysis** so that learners and managers can provide an indication for non-mandatory learning activities as a forecast for future learning requirements (i.e. vocational training, special learning assignments). The aggregated learning requirements of the entity are used during the analysis of learning needs and serve as an additional criterion.
* **Monitor Staff Skills and Qualifications** including ongoing reporting capabilities to determine skill shortages or renewals required through the organisational structure. Ensures alignment to strategic objectives.
* **Manage L & D Vendors and Third-Party Suppliers** to enable the management of course content and facilitation of training needs and resources supplied by third party providers.
* **Manage and Develop Learning Content & Development Offerings** including maintaining a catalogue of learning items such as classroom, e-learning, blended, other (read a book) to show what learning offerings are proposed by the entity.
* **Deliver Learning Management Services** by organising scheduled events and managing the resource requirements of instructor lead trainings. Scheduled offerings can take place in classrooms and in virtual classrooms. In both cases registration management, waiting lists, maximum and minimum number of participants should be defined as part of the scheduled offering.

### Compensation Management

The Compensation Management capability analyses, tracks, and updates employee compensation through the implementation of a strategic plan for employees, basing each employee’s compensation on individual performance, bonuses, and benefits to help maximise the return on available talent. The ideal compensation management policy ensures that the best talent will remain with the entity while attracting new talent and minimising turnover. Compensation Management supports entities to adopt pay-for-performance strategies, thus providing incentives for the workforce to align and deliver goals of an entity in a tangible way.

#### Processes and definitions

* **Manage Rewards and Incentives** to allow peers to recognise achievements of employees by nominating them for a certain reward within defined guidelines of the entity, reflecting company values and behaviours.
* **Nomination and Communication of Reward to Manager** of the nominated employee to enable review against guidelines, budget and fairness and equity.
* **Manage Salary Review and Budgets** to appropriately reward employees based on their contributions to the entity, distinguishing based on performance, current pay level, as well as demographic information such as country.
* **Design and Set-up Incentive Plan** to design and implement incentive plans for employees that are based on a combination of entity and individual goals, to forecast and calculate incentive payments and support proper communication to the employees.
* **Forecast Incentive Payments** during the year so that forecasts can be periodically re-calculated and compared to budgets for incentive payments.
* **Calculation and Communication of Incentive Payments** via assignment of Bonus Plans and calculation of Bonus Payouts with or without manager discretion on the individual part of the bonus.
* **Manage Long Term Incentives (LTI)** to appropriately grant employees either non-salary benefits or bonuses.

### Recruitment

The Recruitment capability efficiently sources the best applicants and selects the best candidates for roles within the entity and to provide a seamless commencement of the hire to retire lifecycle. This capability is crucial for selecting and maintaining the best people for and within an entity, and is achieved through a robust yet agile approval, sourcing, assessment, and selection process before integrating with the offer and onboarding processes.

#### Processes and definitions

* **Manage Requirement to Recruit** to identify vacant or occupied positions requiring recruitment activity, and the identification of staffing needs.
* **Manage Job Requisitions** to start executing the headcount strategy according to the planning and fine-tune details according to the actual staffing needs. Ensure all process participants achieve a common understanding on the job to be staffed. Agree on sourcing and assessment strategy and posting channels according to the nature of the job to be staffed.
* **Manage Talent Search and Sourcing** to leverage talent pipelines and candidate pools to quickly find potentially suitable candidates who have already registered in the database, reach out to potential candidates to verify interest and invite applications. Ability for Candidates to search for jobs according to specific criteria, apply on-line (including Job applications, Selection criteria and Résumés).
* **Manage Candidate Assessment** by reviewing candidates provided through matching of assessments against selection criteria / capability requirements. Shortlist candidates through various selection instruments (e.g. interviews, assessment centres).
* **Manage Candidate Selection** through scheduling interviews and deciding upon screening questions and assessment tool to be used as minimum selection criteria. Confirming the rejected status of the candidate including a formal notification of rejection. Identify the successful candidate along with a fall-back option. Identify applicable hiring process/policies and negotiation ranges. Notify candidate of suitability rating.
* **Manage Offer Process** to share the offer with the candidate and approve/ decline the offer.
* **Manage Candidate Pre-Screening** including pre-screening of application details and candidate mandatory and security requirements.
* **Manage Bulk Recruitment Activities** to enable the mass recruitment of staff based upon entity requirements and intakes (such as a Graduate or Entry Level Program initiative).
* **Manage Reporting and Analytics for Requisition, Candidate, Sourcing and Talent Pools** to integrate to reporting requirements (including Workforce Planning).

### Performance and Goals Management

The Performance & Goals Management capability aligns entity capabilities, KPIs and goals against employee performance, to ensure continuous improvement through ongoing coaching and feedback and evaluate and recognise top talent.

#### Processes and definitions

* **Develop Staff Performance Agreement** enabling the ability to define the performance agreement cycles and processes. Includes the definition of performance indicators and metrics, aligning employee goals with entity objectives.
* **Manage Staff Performance** for individual staff performance against key deliverables and competencies. Enables the reporting of performance ratings across the entity.
* **Manage Appraisal Templates and Distribution** to create and maintain templates for the utilisation of the Staff Performance Agreement process. Includes the ability to distribute to the relevant actors in the Performance Management cycles.
* **Manage Employee Review** including 360 Degree Review to collect feedback from line managers, peers, and subordinates on demonstration of competencies.

### Succession and Career Development

The Succession and Career Development business capability identifies critical positions within the entity, and successfully cultivate the next generation of talent and engage and retain current employees. This capability includes the ability to be able to develop plans that assists entities to minimise risk, by identifying future staffing gaps and developing the talent needed to achieve entity goals with providing visibility and planning capabilities to support future growth.

#### Processes and definitions

* **Manage Leadership Pathways** to enable line managers to review succession plans for (key) positions in their scope to help secure the continuity and success of their entity.
* **Manage Staff Career Paths** whereby employees facilitate review of their career opportunities and together with their line manager identify possible development activities to pursue a career within the entity.
* **Manage Mentoring Services** to enable mentors to share with their mentees constructive feedback, emotional support, opportunities for career building, personal experiences, and valuable skills.
* **Identify and Nominate Talents** whereby line managers assess the potential, set talent flags (e.g. future leader, risk of loss, impact of loss) for their employees, and can nominate them to be included in talent pools and/or considered as successor for key positions.
* **Manage Development Plan** whereby employees drive their own development by identifying, documenting, and following up on development goals and activities.

### Workforce Planning

The Workforce Planning capability enables both strategic and operational planning. Strategic Workforce Planning looks at the long-term view of the organisation and forecasts the roles that will be critical in the in the future. Operational Workforce Planning looks at the immediate demands of the entity and compares this with the current talent supply to define whether additional resources are needed.

#### Processes and definitions

* **Conduct Strategic Workforce Planning** enables entities to forecast, understand, and optimise workforce requirements for the future and to develop workforce plans to realise these.
* **Conduct Workforce Planning** to record the approach to be taken to fulfil workforce demands e.g. learning and development, recruitment, management of a blended workforce, approaches to retention and performance management.
* **Conduct Workforce Reporting** to manage workforce reporting requirements (including alignment to APSC Taskforce). Includes workforce analysis and the ability to print or download workforce plans.
* **Conduct Strategic Planning for Entry level Programs** to develop an overarching strategic plan including the forecasting and modelling to inform entry level (such as graduates and trainees) specific programs.
* **Manage Agency frameworks for Entry level Programs** to enable the ability for entry level (such as graduates and trainees) engagement frameworks and capabilities to be implemented in line with the APSC requirements and specific entity priorities.
* **Conduct Strategic Planning for Diversity Programs** to develop an overarching strategic plan, including the forecasting and modelling to inform Diversity specific programs.
* **Manage Agency Frameworks for Diversity Programs** to enable the ability for inclusive engagement frameworks to be implemented in line with the APSC requirements and specific entity priorities. This includes supporting entity frameworks.

### Schedule and Rostering

The Schedule Rostering capability provides workforce management via a scheduling platform, designed to help the entity to identify talent to meet operational activities, forecast, plan, organise, track, and manage their teams. This would also include the capability to create employee rosters and shift work requirements and link these to the employees’ work time and attendance.

#### Processes and definitions

* **Manage Schedules and Staff Rosters** to allow the forecasting of staff attendances and working patterns, based upon planned or unplanned demand, task-based scheduling requirements and determine gaps and remediate staffing shortages.
* **Manage Time Substitutions** of the actual times worked and integrate to individual planned working times to create time-based substitutions (adjustments) as required.