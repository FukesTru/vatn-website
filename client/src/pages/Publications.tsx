/**
 * VATN Publications Page
 * Style: Field-Grade Precision — deep navy, teal accent, Barlow Condensed
 * All publication entries are reproduced EXACTLY as provided in the source document.
 * No text has been altered, reworded, condensed, or reformatted.
 */
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

function RevealSection({ children, delay: _delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return <div>{children}</div>;
}

interface TopicSection {
  title: string;
  entries: string[];
}

const publications: TopicSection[] = [
  {
    title: "Gas Transfer",
    entries: [
      "Watten, B.J.  1989.  Multiple stage gas absorber.  U.S. Department of Commerce, Washington, D.C.  Patent No. 4,880,445",
      "Watten, B.J.  1992.  Multiple stage gas absorber.  Austria, Belgium, France, West Germany, Greece, Italy, Luxembourg, Netherlands, Spain, Sweden, Switzerland, United Kingdom.  European Patent Office, Munich, Germany, Patent No. 0325938.",
      "Watten, B.J.  1994.  Multiple stage gas absorber.  Canadian Intellectual Property Office, Ottawa, Canada, Patent No. 1329758.",
      "Watten, B.J.  2022.  Sub-surface multi-stage oxygenation supporting net pen aquaculture.  Department of Commerce, Washington D.C. US Patent Application No 18/836,480,2025.",
      "Watten, B.J.  2024.  Multi-stage absorber insert for concurrent stripping of carbon dioxide.  Department of Commerce, Washington D.C. US Patent No. 11,871,730.",
      "Watten, B.J.  2021.  High efficiency water distribution plate design for enhanced oxygen transfer.   Department of Commerce, Washington D.C. Patent Application No  17/549,957,2023.",
      "Watten, B.J., and L.T. Beck.  1985.  Modeling gas transfer in a U-tube oxygen absorption system: effects of off-gas recycling.  Aquacultural Engineering 4:271-297.*",
      "Watten, B.J.  1989.  Simulation of gas transfer within a multi-stage packed column oxygen absorber: numerical model development and application.  Dissertation, Auburn University, Auburn, AL.",
      "Colt, J., and B.J. Watten.  1989.  Applications of pure oxygen in fish culture.  Aquacultural Engineering 7:397-441.*",
      "Watten, B.J., and C.E. Boyd.  1989.  Gas phase axial dispersion in a packed column oxygen absorber.  Aquacultural Engineering 8:421-434.*",
      "Boyd, C.E., and B.J. Watten.  1989.  Aeration systems in aquaculture.  CRC Critical Reviews in Aquatic Sciences 1(3):425-472.*",
      "Watten, B.J., J.W. Meade, and C.E. Boyd.  1990.  Modeling the effects of serial off-gas reuse on the performance of a hooded surface oxygen absorption system.  Aquacultural Engineering 9:97-120.*",
      "Watten, B.J., and C.E. Boyd.  1990.  Gas transfer within a multi-stage packed column oxygen absorber: model development and application.  Aquacultural Engineering 9:33-59.*",
      "Watten, B.J.  1990.  Design of packed columns for commercial oxygen addition and dissolved nitrogen removal based on effluent criteria.  Aquacultural Engineering 9:305-328.*",
      "Watten, B.J.  1991.  Application of pure oxygen in raceway culture systems.   In: Proceedings Symposium on Engineering Aspects of Intensive Aquaculture, Northeast Regional Agricultural Engineering Service, Cornell University, Ithaca, NY. pp.311-332.",
      "Meade, J.W., B.J. Watten, W.F. Krise, and P.W. Halliburton.  1991.  Use of oxygen filled enclosures for aeration and degassing.  American Fisheries Society Special Publications 10:459-464.*",
      "Watten, B.J., J. Colt, and C.E. Boyd.  1991.  Modeling the effect of dissolved nitrogen and carbon dioxide on the performance of pure oxygen absorption systems.  American Fisheries Society Special Publications 10:474-481.*",
      "Boyd, C.E., B.J. Watten, V. Goubier, and R. Wu.  1994. Gas supersaturation in surface waters of aquaculture ponds.  Aquacultural Engineering 13(1):31-39.*",
      "Watten, B.J., W.J. Ridge, and V.A. Mudrak.  1994.  Effect of subatmospheric pressure on the performance of an automated packed-column nitrogen desorption system.  Aquacultural Engineering 13(1):41-58.*",
      "Watten, B.J.  1994.  Design procedures for hooded surface oxygen absorption systems.  In: Design of High-Density Recirculating Aquaculture Systems: Workshop Proceedings, R. Malone, Editor, Louisana Sea Grant College Program, Louisana State University, Baton Rouge, Louisiana. pp. 89-98.",
      "Watten, B.J.  1994.  Aeration and oxygenation.  In: Aquaculture Water Reuse Systems: Engineering Design and Management, M.B. Timmons and T.M. Losordo, Editors.  Elsevier Science B.V., Amsterdam, The Netherlands Developments in Aquaculture and Fisheries Science (27):173-208.*",
      "Watten, B.J.  1995.  Design procedure for hooded surface oxygen absorption systems.  Journal of the World Aquaculture Society 26(2):200-211.*",
      "Wood, L.G. B.J. Watten, C.G. Haugh, G.S. Libey, and T.A. Dillaha. 1996.  Modeling gas transfer and biological respiration in a recirculating aquaculture system.  Aquacultural Engineering 15(5):359-379.*",
      "Vinci, B.J., S.T. Summerfelt, M.B. Timmons, and B.J. Watten.  1996.  Carbon dioxide control in intensive aquaculture: design tool development. In: Proceedings  International Conference on Recirculating Aquaculture, T. Rakestraw, L. Douglas, A. Correa and G. Flick, Editors, Virginia Polytechnic Institute and State University, Freshwater Institute, Aquacultural Engineering Society, Virginia Sea Grant College Program and U.S. Department of Agriculture, Roanoke, Virginia, pp. 399-418.",
      "Watten, B. J., and M. F. Schwartz. 1996. Carbon dioxide pretreatment of AMD for limestone diversion wells.  In: Proceedings:  Seventeenth Annual West Virginia Surface Mine Drainage Task Force Symposium, J. Skousen, Editor, West Virginia Surface Mine Drainage Task Force, West Virginia Mining & Reclamation Association, Morgantown, West Virginia. pp. J1-J10.",
      "Vinci, B.J., B.J. Watten, and M.B. Timmons. 1996.  Gas-phase axial dispersion in a spray tower.  Aquacultural Engineering 15(1):1-11.*",
      "Vinci, B.J. B.J. Watten, and M.B. Timmons.  1997.  Modeling gas transfer in a spray tower oxygen absorber.  Aquacultural Engineering. 16:91-105.*",
      "Tsukuda, S.M., Ebeling, J.M. and B.J. Watten.  1998.  Application of industrial monitoring and control for an experimental carbon dioxide stripper in a recirculating aquaculture system.  In: Proceedings of the Second International Conference on Recirculating Aquaculture, T. Rakestraw, L. Douglas, A. Correa and G. Flick, Editors, Virginia Polytechnic Institute and State University, Freshwater Institute, Aquacultural Engineering Society, Virginia Sea Grant College Program and U.S. Department of Agriculture, Roanoke, Virginia, pp.371-382",
      "Vinci, B.J., Timmons, M.B., Summerfelt, S.T. and B.J. Watten.  1998.  Carbon dioxide control in intensive aquaculture: Version 2.1: User's Guide and Source Code, Fresh Water Institute, Conservation Fund, Arlington, Virginia.",
      "Summerfelt, S.T., Vinci, B.J., Timmons, M.B. and B.J. Watten.  1999.   Stripping columns remove carbon dioxide from recirc systems.  Recirc Today 1:24-26.",
      "Watten, B.J., Sibrell, P.L., Montgomery, G.A. and S.M. Tsukuda.  2004.  Modification of pure oxygen absorption equipment for concurrent stripping of carbon dioxide.  Aquacultural Engineering 32(1): 183-208.*",
      "Colt, J., B. Watten, and M. Rust.  2009.  Modeling carbon dioxide, pH and un-ionized ammonia relationships in serial reuse systems.  Aquacultural Engineering, 40 (1):28-44.*",
      "Colt, J., B, Watten and T. Pfeiffer.  2012.  Carbon dioxide stripping in aquaculture – Part I: Terminology and reporting.  Aquacultural Engineering 47:27-37.*",
      "Colt, J., B. Watten and T. Pfeiffer.  2012.  Carbon dioxide stripping in aquaculture – Part II:  Development of gas transfer models.  Aquacultural Engineering 47: 38-46.*",
      "Colt, J., B. Watten, and T. Pfeiffer.  2012.  Carbon dioxide stripping in aquaculture – Part III:  Model verification.  Aquacultural Engineering 47: 47-59.*",
    ],
  },
  {
    title: "Alkalinity Enhancement/Acid Neutralization",
    entries: [
      "Watten, B.J. 1999.  Process and apparatus for carbon dioxide pretreatment and accelerated limestone dissolution for treatment of acidified water.  U.S. Department of Commerce, Washington, D.C.  Patent No. 59114046.",
      "Watten, B.J.  1999. Apparatus for carbon dioxide pretreatment and accelerated limestone dissolution for treatment of acidified water.  U.S. Department of Commerce, Washington, D.C.  Patent No. 5863422.",
      "Watten, B. J., and M. F. Schwartz. 1996. Carbon dioxide pretreatment of AMD for limestone diversion wells.  In: Proceedings:  Seventeenth Annual West Virginia Surface Mine Drainage Task Force Symposium, J. Skousen, Editor, West Virginia Surface Mine Drainage Task Force, West Virginia Mining & Reclamation Association, Morgantown, West Virginia. pp. J1-J10.",
      "Sibrell, P.L., Watten, B.J., Friedrich, A.E. and Vinci, B.J.  2000.  ARD remediation with limestone in a CO2 pressurized reactor.  In: Proceedings of  ICARD 2000, Asa Sjoblom, Editor, 5th International Conference on Acid Rock Drainage, Society for Mining, Metallurgy, and Exploration. Denver, Colorado. pp 1017-1020 *",
      "Cole, M.B., Arnold, D.E. and B.J. Watten.  2001.  Physiological and behavioral responses of stonefly nymphs to enhanced limestone treatment of acid mine drainage.  Water Research 35:625-632.*",
      "Cole, M.B., Arnold, D.E., Watten, B.J. and W.F. Krise.  2001.  Haematological and physiological responses of brook charr, to untreated and limestone-neutralized acid mine drainage, Journal of Fish Biology 59:79-91.*",
      "Sibrell, P.L., Watten, B.J. and T. Boone.  2003.  Remediation of acid mine drainage at the Friendship Hill National Historic Site with a pulsed bed limestone process.  In: Hydrometallurgy 2003, C.A. Young, Editor, The Minerals , Metals and Materials Society, Warrendale, Pennsylvania, pp.1823-1836.*",
      "Sibrell, P.L. and B.J. Watten.  2003.  Evaluation of sludge produced by limestone neutralization of AMD at the Friendship Hill National Historic Site.  In: Proceedings American Society of Mining and Reclamation 22nd Annual National Conference, R.I. Barnhisel, Editor, American Society of Mining and Reclamation, Lexington, Kentucky. pp 1151-1169.*",
      "Watten, B.J., Sibrell, P.L. and M.F. Schwartz.  2004.  Effect of acidity and elevated PCO2 on acid neutralization within pulsed limestone bed reactors receiving coal mine drainage.  Environmental Engineering Science 21(6): 786-802.*",
      "Watten, B.J., Schwartz, M.F. and P.L. Sibrell.  2004.  Evaluation of pulsed limestone bed reactors for alkalinity control.  In: Proceedings 5th  International Conference on Recirculating Aquaculture, T. Rakestraw, L. Douglas, A. Correa and G. Flick, Editors, Virginia Polytechnic Institute and State University, Freshwater Institute, Aquacultural Engineering Society, Virginia Sea Grant College Program and U.S. Department of Agriculture, Roanoke, Virginia, pp 249-258.",
      "Watten, B.J., Sibrell, P.L. and M.F. Schwartz.  2005.  Acid neutralization within limestone sand reactors receiving coal mine drainage.  Environmental Pollution 137:295-304.*",
      "Sibrell, P.L. and B.J. Watten.  2005.  Utilization of CO2 to enhance limestone neutralization of acid impacted waters.  In: Proceedings 2005 International Conference on Coal Science and Technology, National Institute of Advanced Industrial Science and Technology, Japan Society for Promotion of Science, Okinawa, Japan, 3P501:1-19.",
      "Sibrell, P. L., B. J. Watten, T. A. Haines, and B. W. Spaulding.  2006.  Limestone fluidized bed treatment of acid impacted water at the Craig Brook National Fish Hatchery, Maine, USA.  Aquacultural Engineering, 34: 61-71.*",
      "Watten, B.J., Lee, P.C., Sibrell, P.L. and Timmons, M.B.  2007.  Effect of temperature, hydraulic residence time and elevated PCO2 on acid neutralization within a pulsed limestone bed reactor., Water Research, 41:1207-1214.*",
      "Watten, B. J., P. L. Sibrell, C. D. Snyder, Z. Johnson, M. F. Schwartz, and S. S. Summerfelt.  2007.  Multi Year NRPP Project Final Report - Acid Mine Drainage: Refinement of New Treatment Technology, Vol. 1-3, 392 p.  Report to National Park Service.",
      "Watten, Barnaby J., Vincent Mudrak, Philip L. Sibrell, Steve Summerfelt, and Claude E. Boyd.  2007.  Pilot scale testing of a fluidized bed limestone reactor at the Warm Springs Regional Fisheries Center - Test Series II.  Report to Fish and Wildlife Service. Region 6.",
      "Watten, B. J.,  V. A. Mudrak, C. Echevarria, P. L. Sibrell, S. T. Summerfelt, and C. E. Boyd.  2008.  Effect of HRT and PCO2 on the Performance of a Fluidized Bed Limestone Reactor Designed for Alkalinity Enhancement at the Warm Springs Regional Fisheries Center.  Proceedings of the 7th International Conference on Recirculating Aquaculture, T. T. Rakestraw and others, eds., Virginia Polytechnic Institute, Blacksburg, VA, pp. 388-403.",
      "Wills, P. S., T. Pfeiffer, R. Baptiste and B.J. Watten.  2016.  Application of a fluidized bed reactor charged with aragonite for control of alkalinity, pH and carbon dioxide in marine recirculating aquaculture systems.  Aquacultural Engineering, 70:81-85*.",
      "Watten, B.J., Mudrak, V.A., Echevarria, C., Sibrell, P., Summerfelt, S.T. and Boyd, C.E.  2017.  Performance and application of a fluidized bed limestone reactor designed for control of alkalinity, hardness and pH at the Warm Springs Regional Fisheries Center.  Aquacultural Engineering 77:97-106*",
    ],
  },
  {
    title: "Dissolved Gas Instrumentation/Sampling",
    entries: [
      "Watten, B.J.  1984.  A sub-surface water sampler for lake, pond, and river studies.  Progressive Fish-Culturists 46(3):213-215.*",
      "Watten, B.J., D.R. Smith, and W.J. Ridge.  1997.  Continuous monitoring of dissolved oxygen and total dissolved gas pressure based on head-space partial pressures. Journal of the World Aquaculture Society.  28:316-333.*",
      "Tsukuda, S.M., Ebeling, J.M. and B.J. Watten.  1998.  Application of industrial monitoring and control for an experimental carbon dioxide stripper in a recirculating aquaculture system.  In: Proceedings of the Second International Conference on Recirculating Aquaculture, T. Rakestraw, L. Douglas, A. Correa and G. Flick, Editors, Virginia Polytechnic Institute and State University, Freshwater Institute, Aquacultural Engineering Society, Virginia Sea Grant College Program and U.S. Department of Agriculture, Roanoke, Virginia, pp.371-382",
      "Watten, B.J., Boyd, C.E. and Summerfelt, S.T.  2004.  Feasibility of measuring dissolved carbon dioxide based on head space partial pressures.  Aquacultural Engineering 30:83-101.",
      "Pfeiffer, T.F., S.T. Summerfelt, and B.J. Watten.  2006.  Comparative performance of CO2 measuring methods: application for marine recirculation systems.  In: Proceedings 6th International Conference on Recirculating Aquaculture, Roanoke, Virginia, July 21—23, 2006",
      "Pfeiffer, T.J., S.T. Summerfelt and B.J. Watten.  2011.  Comparative performance of CO2 measuring methods: marine aquaculture recirculation system applications.  Aquacultural Engineering, 44(1): 1-9.*",
    ],
  },
  {
    title: "Water Reuse/RAS Technology",
    entries: [
      "Watten, B.J.  1980.  A new approach to backyard fish and tomato production.  In:10th Annual Agricultural and Food Fair Bulletin of the Virgin Islands, D.S. Padda, Editor, College of the Virgin Islands, St. Croix, U.S. Virgin Islands. pp. 33-39.",
      "Watten, B.J., and R.L. Busch.  1984.  Tropical production of tilapia (Sarotherodon aurea) and tomatoes (Lycopersicon esculentum) in a small scale recirculating water system.  Aquaculture 41:271-283.*",
      "Watten, B.J., and M.J. English.  1985.  Effects of organic matter in aquacultural waste on the ammonium exchange capacity of clinoptilolite.  Aquaculture 46:221-235.*",
      "Watten, B.J.  1992.  Modeling the effects of sequential rearing on the potential production of controlled environment fish-culture systems.  Aquacultural Engineering 11(1):33-46.*",
      "Wood, L.G. B.J. Watten, C.G. Haugh, G.S. Libey, and T.A. Dillaha. 1996.  Modeling gas transfer and biological respiration in a recirculating aquaculture system.  Aquacultural Engineering 15(5):359-379.*",
      "Heinen, J.M. J.A. Hankins, A.L. Weber, and B.J. Watten.  1996.  A semiclosed recirculating water system for high-density culture of rainbow trout.  Progressive Fish-Culturist 58:11-22.*",
      "Honeyfield, D. C., and B. J. Watten.  1996.  Comparative performance of single-stage and two-stage pulsed bed biological filters receiving recirculating fish culture effluent.  In: Proceedings  International Conference on Recirculating Aquaculture, T. Rakestraw, L. Douglas, A. Correa and G. Flick, Editors, Virginia Polytechnic Institute and State University, Freshwater Institute, Aquacultural Engineering Society, Virginia Sea Grant College Program and U.S. Department of Agriculture, Roanoke, Virginia, pp. 419-430.",
      "Watten, B.J., Timmons, M.B., Vinci, B.J. and S. T. Summerfelt.  1998.  Comparative performance of biofilm reactor types: application of steady-state biofilm kinetics.  In: Proceedings of the Second International Conference on Recirculating Aquaculture, T. Rakestraw, L. Douglas, A. Correa and G. Flick, Editors, Virginia Polytechnic Institute and State University, Freshwater Institute, Aquacultural Engineering Society, Virginia Sea Grant College Program and U.S. Department of Agriculture, Roanoke, Virginia, pp.355-358.",
      "Summerfelt, S.T., Vinci, B.J., Timmons, M.B. and B.J. Watten.  1999.   Stripping columns remove carbon dioxide from recirc systems.  Recirc Today 1:24-26.",
      "Sandu, S.I., Boardman, G.D., Watten, B.J. and B.L. Brazil.  2002.  Factors influencing the nitrification efficiency of fluidized bed filters with plastic bead medium.  Aquacultural Engineering 256: 41-59.*",
      "Watten, B. J. and P. L. Sibrell. 2006.  Comparative performance of fixed film biological filters: Application of reactor theory.  Aquacultural Engineering, 34:198-213.*",
      "Wills, P. S., T. Pfeiffer, R. Baptiste and B.J. Watten.  2016.  Application of a fluidized bed reactor charged with aragonite for control of alkalinity, pH and carbon dioxide in marine recirculating aquaculture systems.  Aquacultural Engineering, 70:81-85*.",
    ],
  },
  {
    title: "Hydraulics/Rearing Unit Design",
    entries: [
      "Watten, B.J. and A.W. Palmisano.  2001.  Hydropower conversion system. U.S. Department of Commerce, Washington, D.C.  Patent No. 6546723 B1.",
      "Adams, N. and B. Watten.  2017.  Nozzle mixing methods for ship ballast tanks.  Department of Commerce, Washington D.C. Patent No. 9688551.",
      "Watten, B.J.  2020. Portable mixing apparatus for ballast water treatment.  Department of Commerce, Washington D.C. Patent No US 16/388,872,2020.",
      "Watten, B.J., and L.T. Beck.  1987.  Comparative hydraulics of a rectangular cross-flow rearing unit.  Aquacultural Engineering 6:127-140.*",
      "Watten, B.J., and R.P. Johnson.  1990.  Comparative performance of a production scale rectangular cross-flow rearing unit.  Aquacultural Engineering 9:245-266.",
      "Howerton, R.D., C.E. Boyd, and B.J. Watten.  1993.  Design and performance of a horizontal axial-flow water circulator.  Journal of Applied Aquaculture 3 (1-2):163-183.*",
      "Ross, R.M., B.J. Watten, W.F. Krise, M.N. DiLauro, and R.W. Soderberg.  1995.  Influence of tank design and hydraulic loading on the behavior, growth, and metabolism of rainbow trout (Oncorhynchus mykiss).  Aquacultural Engineering 14(1):29-47.*",
      "Watten, B. J., and D. C. Honeyfield.  1995.  Hydraulic characteristics of a rectangular mixed-cell rearing unit.   In:.Aquacultural Engineering and Waste Management:  Proceedings Aquaculture Expo VIII and Aquaculture in the Mid-Atlantic, M. B. Timmons, Editor, Northeast Regional Agricultural Engineering Service, Cooperative Extension, Ithaca, New York, pp 112-126.",
      "Ross, R.M., and B.J. Watten.  1998.  Importance of rearing unit design and stocking density to the behavior, growth, and metabolism of lake trout (Salvelinus namaycush).  Aquacultural Engineering. 19:41-56.*",
      "Summerfelt, S.T., Timmons, M.B. and B.J. Watten.  1998.  Culture tank designs to increase profitability.  In: Proceedings of the Second International Conference on Recirculating Aquaculture, T. Rakestraw, L. Douglas, A. Correa and G. Flick, Editors, Virginia Polytechnic Institute and State University, Freshwater Institute, Aquacultural Engineering Society, Virginia Sea Grant College Program and U.S. Department of Agriculture, Roanoke, Virginia, pp.253-262.",
      "Summerfelt, S.T., Timmons, M.B. and B.J. Watten.  2000.  Tank and raceway culture.  In: Encyclopedia of Aquaculture, R.R. Stickney, Editor, John Wiley & Sons, Inc., New York, New York, pp. 921-928 *",
      "Watten, B.J., Honeyfield, D.C. and M.F. Schwartz.  2000.  Hydraulic characteristics of a rectangular mixed-cell rearing unit.  Aquacultural Engineering 24:59-73.*",
      "Watten, B.J.  2003.  USGS developing low-head hydropower system driven by water-produced vacuum.  In: Research and Development Forum, Hydro Review, E. Fulton, Editor, HCI Publications, Kansas City, Missouri, June, p. 81.",
      "Watten, B.J. and J. Noreika.   2014.  Effect of hydraulic gradient, vacuum level and system geometry on performance of a gas operated hydropower conversion system. In: Proceedings 18th International Seminar on Hydropower Plants: innovation and development needs for a sustainable growth of hydropower, C. Bauer and E. Doujak Editors, Institute for Energy Systems and Thermodynamics, Wien, Austria. pp 599-614.",
      "Haro, A., B. Watten, and J. Noreika. 2016.  Passage of downstream migrant American eels through an airlift-assisted deep bypass.  Ecological Engineering, 91:545 – 552*.",
      "Stockton, K.A., Moffitt, C.M., Watten, B.J. and Vinci, B.J.  2016.  Comparison of hydraulics and particle removal efficiencies in a mixed cell raceway and Burrows pond rearing system.  Aquacultural Engineering, 74, 52-61*.",
      "Baker, N., Haro, A., Watten, B., Noreika, J. and Bolland, D.  2019.  Comparison of attraction, entrance and passage of downstream migrant American eels (Anguilla rostrata) through airlift and siphon deep entrance bypass systems. Ecological Engineering, 126:74-82*.",
    ],
  },
  {
    title: "Control of Aquatic Invasive Species",
    entries: [
      "Watten, B.J.  2004.  Method and apparatus for control of aquatic vertebrate and invertebrate invasive species.  Department of Commerce, Washington D.C. Patent No. 6821442.",
      "Adams, N. and B. Watten.  2017.  Nozzle mixing methods for ship ballast tanks.  Department of Commerce, Washington D.C. Patent No. 9688551.",
      "Watten, B.J.  2020. Portable mixing apparatus for ballast water treatment. Department of Commerce, Washington D.C. Patent No US 16/388,872,2020.",
      "Watten, B.J.  2020. Hydroxide stabilization as a means of controlling surface fouling associated with wetted surfaces of boats, barges and ships. Department of Commerce, Washington D.C. Patent No US 10,800,497 B2.",
      "Watten, B.J.  2020.  Method and apparatus for control of aquatic invasive species using hydroxide stabilization.  Department of Commerce, Washington D.C. US Patent Application No US2020/0198751 A1.",
      "Watten, B.J., Sears, R.E. and Bumgardner, R.F.  2005. New method for control of biological fouling in pipelines based on elevated partial pressures of carbon dioxide or combustion exhaust gases.  In: Proceedings 2005 International Conference on Coal Science and Technology, National Institute of Advanced Industrial Science and Technology, Japan Society for Promotion of Science, Okinawa, Japan, 4A02:1-17.",
      "Nielson, R. J., C. M. Moffitt and B. J. Watten.  2012.  Hydrocyclonic separation of invasive New Zealand mudsnails from an aquaculture water source.  Aquacultural Engineering 326: 156-162.*",
      "Nielson, R. J., C.M. Moffitt and B.J. Watten.  2012. Toxicity of elevated partial pressures of carbon dioxide to invasive New Zealand mudsnails.  Journal Environmental Toxicology and Chemistry, 31:1838-1842.*",
      "Starliper, C.E. and B.J. Watten.  2013.  Bactericidal efficacy of elevated pH on fish pathogenic and environmental bacteria. Journal of Advanced Research 4(4): 345-353.*",
      "Lambertz, M.A., A. Ray, M. Layhee, C. Densmore, A. Sepulveda, J. Gross, and B.J. Watten.  2014.  Suppressing bullfrog larvae with carbon dioxide.  Journal Herpetology, 48 (1): 59-66.*",
      "Moffitt, C.M., A. Barenberg, K.A. Stockton and B.J. Watten.  2015. Efficacy of two approaches for disinfecting surfaces and water infested with quagga mussel veligers.  In: Biology and management of invasive quagga and zebra mussels in the Western United States, W.H. Wong and S.L. Gerstenberger Editors, CRC Press, Boca Raton, FL. 574pp.*",
      "Elskus, A.A., C. G. Ingersoll, N.E. Kemble, K.R. Echols, W.G. Brumbaugh, J.W. Henquinet and B.J. Watten.  2015.  An evaluation of the residual toxicity and chemistry of a sodium hydroxide-based ballast water treatment system for freshwater ships.  J. Environmental Toxicology and Chemistry, 34 (6): 1405-1416.*",
      "Moffitt, C., B. Watten, A. Barenberg and J. Henquinet.  2015.  Hydroxide Stabilization as a new tool for ballast disinfection: efficacy of treatment on zooplankton.  Management of Biological Invasions, Vol. 6. Issue 3: 263-275*.",
      "Starliper, C.E.,  B. J. Watten,  D. D. Iwanowicz, P. A. Green, N. L. Bassett and C. R. Adams.  2015.  Bactericidal efficacy of elevated pH to bacteria from The M/V Indiana Harbor.  Journal of Advanced Research, 6: 501-509*.",
      "Elskus, A., Mitchelmore, C.L., Wright, D., Henquinet, J.W., Welschmeyer, N., Flynn, C. and Watten, B.J.   2017.  Efficacy and residual toxicity of a sodium hydroxide based ballast water treatment system for freshwater bulk freighters.  J. Great lakes Research 43: 744-754*.",
      "Treanor, H.B., Ray, A.M., Layhee, M., Watten, B.J., Gross, J., Gresswell, R.E., and Webb, M.A.H.  2017.  Using carbon dioxide in fisheries and aquatic invasive species management.  Fisheries 42: 621-628*.",
    ],
  },
];

export default function Publications() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const totalEntries = publications.reduce((sum, s) => sum + s.entries.length, 0);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F7F9FB" }}>
      <Navigation />
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #060E1A 0%, #0A1628 60%, #0D2040 100%)",
          paddingTop: "120px",
          paddingBottom: "64px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Blueprint grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(58,140,63,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(58,140,63,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="container relative z-10 text-center">
          <RevealSection>
            <p className="section-label mb-3" style={{ color: "#3A8C3F" }}>Research &amp; Technical Record</p>
            <span className="teal-rule mb-5" style={{ margin: "0 auto 1.25rem" }} />
            <h1
              className="font-display text-white mb-4"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 800, lineHeight: 1.05 }}
            >
              Publications, Patents &amp; Reports
            </h1>
            <p className="font-body text-white/60 max-w-2xl mx-auto" style={{ fontSize: "1rem", lineHeight: "1.7" }}>
              Dr. Barnaby J. Watten — Selected publications, patents, and technical reports organized by research topic area. {totalEntries} entries across {publications.length} topic areas.
            </p>
          </RevealSection>

          {/* Stats row */}
          <RevealSection delay={120}>
            <div className="flex flex-wrap gap-8 mt-8 justify-center">
              {[
                { value: "80+", label: "Publications" },
                { value: "15", label: "U.S. & International Patents" },
                { value: "6", label: "Research Topic Areas" },
                { value: "49+", label: "Years of Industry Experience" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span
                    className="font-display font-bold"
                    style={{ fontSize: "1.8rem", color: "#3A8C3F", lineHeight: 1 }}
                  >
                    {stat.value}
                  </span>
                  <span className="font-body text-white/40 mt-1" style={{ fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Topic nav */}
      <div style={{ backgroundColor: "#0A1628", borderBottom: "1px solid rgba(58,140,63,0.15)" }}>
        <div className="container">
          <div className="flex flex-wrap gap-1 py-3">
            {publications.map((section) => (
              <button
                key={section.title}
                onClick={() => {
                  setActiveSection(activeSection === section.title ? null : section.title);
                  const el = document.getElementById(`section-${section.title.replace(/\//g, "-").replace(/\s+/g, "-")}`);
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="font-display font-semibold transition-all duration-200"
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  padding: "6px 14px",
                  borderRadius: "3px",
                  backgroundColor: "rgba(58,140,63,0.1)",
                  color: "#3A8C3F",
                  border: "1px solid rgba(58,140,63,0.2)",
                  cursor: "pointer",
                }}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Publications content */}
      <div className="container py-16">
        <div className="max-w-4xl">
          {publications.map((section, si) => (
            <RevealSection key={section.title} delay={si * 60}>
              <div
                id={`section-${section.title.replace(/\//g, "-").replace(/\s+/g, "-")}`}
                className="mb-14"
              >
                {/* Section header */}
                <div
                  className="flex items-center gap-4 mb-6 pb-4"
                  style={{ borderBottom: "2px solid #3A8C3F" }}
                >
                  <div
                    className="font-display font-bold"
                    style={{
                      fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                      letterSpacing: "0.02em",
                      color: "#060E1A",
                    }}
                  >
                    {section.title}
                  </div>
                  <div
                    className="font-body"
                    style={{
                      fontSize: "0.72rem",
                      color: "#3A8C3F",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      backgroundColor: "rgba(58,140,63,0.1)",
                      padding: "3px 10px",
                      borderRadius: "2px",
                      border: "1px solid rgba(58,140,63,0.2)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {section.entries.length} entries
                  </div>
                </div>

                {/* Entries */}
                <div className="flex flex-col gap-4">
                  {section.entries.map((entry, ei) => (
                    <div
                      key={ei}
                      className="flex gap-4"
                      style={{
                        padding: "14px 18px",
                        backgroundColor: "#FFFFFF",
                        borderLeft: "3px solid #3A8C3F",
                        borderRadius: "0 6px 6px 0",
                        boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
                      }}
                    >
                      <span
                        className="font-display font-bold shrink-0"
                        style={{
                          fontSize: "0.65rem",
                          color: "#3A8C3F",
                          letterSpacing: "0.06em",
                          marginTop: "3px",
                          minWidth: "28px",
                        }}
                      >
                        {String(ei + 1).padStart(2, "0")}
                      </span>
                      <p
                        className="font-body"
                        style={{
                          fontSize: "0.875rem",
                          lineHeight: "1.65",
                          color: "#1E2D3D",
                        }}
                      >
                        {entry}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>
          ))}

          {/* Footer note */}
          <RevealSection delay={200}>
            <div
              style={{
                padding: "16px 20px",
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(58,140,63,0.2)",
                borderRadius: "4px",
                marginTop: "8px",
              }}
            >
              <p className="font-body" style={{ fontSize: "0.8rem", color: "#6B7F8E", lineHeight: "1.6" }}>
                * Denotes peer-reviewed publication. This list represents selected publications, patents, and technical reports by Dr. Barnaby J. Watten, organized by primary research topic area. Some entries appear in multiple topic areas where the work spans disciplines.
              </p>
            </div>
          </RevealSection>
        </div>
      </div>
      <Footer />
    </div>
  );
}
