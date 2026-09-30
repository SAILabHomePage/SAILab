window.SAIL_DATA = {

  /* ---------- 기사 링크 모음 (지시문 마지막 표) ----------
     null = 아직 주소 없음 → 화면에서 자동으로 빠집니다. 주소를 받으면 채우기만 하면 됩니다. */
  articles: {
    A1: null, // 숭실대 뉴스센터 (교수님이 보내주신 scatch.ssu.ac.kr 링크 필요)
    A2: "https://www.newspim.com/news/view/20260624000689",
    A3: "http://www.dailysmart.co.kr/news/articleView.html?idxno=125988",
    A4: null, // 한국대학신문 (네이버 뉴스 검색 필요)
    A5: null, // 전자신문 에듀플러스 (검색 필요)
    A6: null, // 핀포인트뉴스 (검색 필요)
    A7: null, // 대학IN (검색 필요)
    B1: "http://www.issuemaker.kr/news/articleView.html?idxno=51675",
    B2: "https://blog.naver.com/imbig8848/224393131081",
    C1: "https://www.aitimes.com/news/articleView.html?idxno=210082",
    C2: "https://www.asiatoday.co.kr/kn/view.php?key=20260506001730484",
    C3: "https://www.mt.co.kr/policy/2026/05/06/2026050609261616704",
    D1: "https://myr.ewha.ac.kr/cse/student/news.do?mode=view&articleNo=758552&title=%EC%B5%9C%ED%98%9C%EC%86%A1+%EC%84%9D%EB%B0%95%EC%82%AC%ED%86%B5%ED%95%A9%EA%B3%BC%EC%A0%95%EC%83%9D%2C+%EC%88%AD%EC%8B%A4%EB%8C%80%ED%95%99%EA%B5%90+%EC%A0%84%EC%9E%90%EC%A0%95%EB%B3%B4%EA%B3%B5%ED%95%99%EB%B6%80+%EC%A0%84%EC%9E%84%EA%B5%90%EC%9B%90+%EC%9E%84%EC%9A%A9",
    D2: "https://www.kyosu.net/news/articleView.html?idxno=142177",
    D3: "https://www.eduplusnews.com/news/articleView.html?idxno=15833",
    D4: "https://edu.donga.com/news/articleView.html?idxno=94114"
  },

  /* ---------- Upcoming (News 맨 위 작은 상자) ----------
     until: 이 날짜가 지나면 자동으로 사라집니다. */
  upcoming: [
    { date: "2026.11", cat: "Paper", until: "2026-11-15",
      text: "Our paper will be presented at AGENT-SEC 2026, the ACM CCS Workshop on Security, Privacy, and Safety of Agentic AI Systems (Nov. 15, 2026)." },
    { date: "2026.10", cat: "Talk", until: "2026-10-08",
      text: "Prof. Hyesong Choi will give an invited talk, \u201cBeyond Pixels: Detecting AI-Generated Images through Social Gaze Consistency,\u201d at the 3rd NEIT Convergence Research Seminar, Soongsil University (Oct. 8, 2026)." }
  ],

  /* ---------- News (최신이 위) ----------
     cat: Paper / Grant / Talk / Service / Media / Lab / Award
     star: true → 굵게 표시 */
  news: [
    // ===== 2026 =====
    { date: "2026.09", cat: "Paper", // [2026.09 CV 반영] NeurIPS 2026 신규. 월은 9월로 가정
      text: "\u201cDisentangling Channel Semantics in Vision Transformers via Token Decorrelation and Composition-Aware Modulation\u201d is accepted at NeurIPS 2026." },
    { date: "2026.09", cat: "Paper", star: true, links: ["A1", "A2", "A3", "A4", "A5", "A6", "A7"], // 교수님 지시: 6월 → 9월로 이동
      text: "Three papers are accepted at ECCV 2026: ECC (with Meta and UBC) and Aether (with NAVER AI Lab), both first-authored by Prof. Hyesong Choi, and a paper on unified multimodal models. Congratulations!" },
    { date: "2026.09", cat: "Paper", // 교수님 확인: 2026.09
      text: "\u201cWhy AI-Assisted Security Monitoring Is Hard to Deploy\u201d is accepted at AISec 2026, the ACM Workshop on Artificial Intelligence and Security (co-located with ACM CCS). (Corresponding author)" },
    { date: "2026.09", cat: "Paper", // 교수님 확인: 2026.09
      text: "\u201cWhen Recovery Fails Open\u201d is accepted at AGENT-SEC 2026, the ACM CCS Workshop on Security, Privacy, and Safety of Agentic AI Systems." },
    { date: "2026.09", cat: "Lab",
      text: "Hyejin Go, Sohee Kim, and Jihyeon Kim, who started as undergraduate researchers in SAIL, joined the lab as graduate students. Welcome!" },
    { date: "2026.09", cat: "Paper",
      text: "Seven student-first-author manuscripts from SAIL are now under review, all with Prof. Hyesong Choi as corresponding author." },
    { date: "2026.09", cat: "Grant",
      text: "Awarded an industry-academia R&D project (Spartan SW, Phase II) on temporally aligned audio-visual-text multimodal models for short-form music content. (PI)" },
    { date: "2026.08", cat: "Media", star: true, links: ["B1", "B2"],
      text: "Prof. Hyesong Choi was featured in an interview with Issue Maker: \u201cA lab sailing relentlessly toward AGI.\u201d" },
    { date: "2026.08", cat: "Paper", // CV C12 기준 저자에 교신저자 표시가 없어 "(Corresponding author)" 삭제
      text: "Our paper was presented at WISA 2026 (World Conference on Information Security Applications), Jeju, Korea." },
    { date: "2026.08", cat: "Service", // 교수님 확인: 2026.08
      text: "Prof. Hyesong Choi was appointed as an Expert Committee Member of the Future Security Technology Forum (\ubbf8\ub798\ubcf4\uc548\uae30\uc220\ud3ec\ub7fc)." },
    // AAAI 2027 PC 항목은 교수님 지시로 News에서 삭제 (People > Academic Services에는 그대로 있음)
    { date: "2026.07", cat: "Talk",
      text: "Prof. Hyesong Choi gave an invited seminar, \u201cThree Challenges of Large-Scale Multimodal AI: Data, Efficiency, and Reliability,\u201d at the IT Convergence Major Workshop, Soongsil University." },
    { date: "2026.06", cat: "Lab", pending: true, // 월 확인
      text: "Sungjun Kim, a former SAIL member, joined SK hynix. Congratulations!" },
    { date: "2026.05", cat: "Grant", star: true, links: ["C1", "C2"],
      text: "Awarded the national AI-Centered University Program (AI\uc911\uc2ec\ub300\ud559, MSIT/IITP; KRW 24 billion over 8 years, 2026-2033), one of the first seven universities selected nationwide. Prof. Hyesong Choi co-wrote the proposal and is a participating faculty member of the program." },
    { date: "2026.05", cat: "Grant",
      text: "Awarded a research project on AI-semiconductor convergence, funded by the COSS Next-Generation Semiconductor Convergence and Open Sharing System. (PI, Project Lead)" },
    { date: "2026.05", cat: "Paper",
      text: "Four new preprints from SAIL students are released on arXiv: Counterfactual Phrase Intervention, AdaMerge, When Eyes Betray AI (with UIUC), and The Rescue Effect." },
    { date: "2026.04", cat: "Grant",
      text: "Awarded a research project on Agentic AI for national and public autonomous security, funded by the National Security Research Institute (NSR). (PI, KRW 60 million)" },
    { date: "2026.04", cat: "Grant",
      text: "Awarded a national IITP program on the reliability and safety of AI agents (2026-2029; KRW 4.5 billion in total) as a consortium with KAIST (lead), Seoul National University, and Coontec. (Participating faculty)" },
    { date: "2026.03", cat: "Grant", star: true,
      text: "Granted the NRF Outstanding Early-Career Researcher Program (\uc6b0\uc218\uc2e0\uc9c4\uc5f0\uad6c), a 3-year national grant (KRW 300 million), for the Corruption-to-Reconstruction (C2R) framework. (PI)" },
    { date: "2026.03", cat: "Grant",
      text: "Awarded an industry-academia R&D project (Spartan SW, Phase I) on audio-visual multimodal models for music content analysis. (PI)" },
    { date: "2026.02", cat: "Talk",
      text: "Prof. Hyesong Choi gave an invited seminar, \u201cEnvironment-Agnostic AI Agents,\u201d at the AI Security Research Center (ITRC), Soongsil University." },
    { date: "2026.01", cat: "Lab",
      text: "Prof. Hyesong Choi visited UIUC for two months as a visiting scholar, working with Prof. James M. Rehg's group on Social AI and AI-generated image detection." },
    { date: "2026.01", cat: "Paper",
      text: "CLDA is accepted at ICASSP 2026." },
    { date: "2026.01", cat: "Grant",
      text: "Awarded curriculum development projects from the RISE Program and the AI Bootcamp Program at Soongsil University: four new AI courses designed and developed. (PI)" },

    // ===== 2025 =====
    { date: "2025.12", cat: "Paper",
      text: "RobIA is accepted at NeurIPS 2025." },
    { date: "2025.11", cat: "Service",
      text: "Prof. Hyesong Choi has been appointed as a Board Member (\ud559\ud68c \uc774\uc0ac) of the International Conference on ICT Convergence (ICTC)." },
    { date: "2025.10", cat: "Service", // 교수님 확인: 2025.10 (CV Advisory에는 "2026"으로 적혀 있음, 확인 중)
      text: "Prof. Hyesong Choi served as an expert advisor to KIST on physical-AI-based, city-scale safety and disaster response planning." },
    { date: "2025.09", cat: "Talk",
      text: "Prof. Hyesong Choi gave an invited expert lecture, \u201cFrom Pre-training to Transfer: Designing Parameter Pathways for AI Security,\u201d at the AI Security Research Center (ITRC), Soongsil University." },
    { date: "2025.09", cat: "Grant",
      text: "Awarded the Soongsil University Research Fund for New Faculty for \u201cPre-training with a General-Purpose Decoder.\u201d (PI)" },
    { date: "2025.09", cat: "Lab",
      text: "Joined the IITP-ITRC AI Security Research Center at Soongsil University (Director: Prof. Souhwan Jung) as participating faculty." },
    { date: "2025.09", cat: "Lab", star: true, links: ["D1", "D2", "D3", "D4"],
      text: "Prof. Hyesong Choi joins Soongsil University as an Assistant Professor in the School of Electronic Engineering, right after receiving her Ph.D. The Scalable AI Lab (SAIL) is founded." },
    { date: "2025.08", cat: "Award",
      text: "Prof. Hyesong Choi received her Ph.D. in Computer Science and Engineering from Ewha Womans University and was awarded the Outstanding Dissertation Award (Graduate School-wide)." }
  ],

  /* ---------- 연구 기둥 (Home 카드 + Research 페이지) ----------
     [2026.09] CV 번호 체계로 변경됨 */
  pillars: [
    { id: "pillar-1", name: "Efficient Vision-Language Foundation Models",
      desc: "Training, data, and deployment of VLMs with less compute",
      homePapers: ["C18", "C15", "C14", "C13", "P9"] },
    { id: "pillar-2", name: "From Perception to Action: Physical AI",
      desc: "Visual RL, 3D perception, and VLA models for robots and driving",
      homePapers: ["C10", "C8", "C5", "C4"] },
    { id: "pillar-3", name: "Trustworthy and Secure AI",
      desc: "Deepfake detection, agent security, and auditing of LLMs",
      homePapers: ["P8", "C17", "C16", "P7"] }
  ],

  /* ---------- Publications ----------
     [2026.09] 교수님 최신 CV와 번호·분류를 통일함
       - AISec, AGENT-SEC, WISA → Conference로 이동 (Workshop 묶음 없음)
       - Preprint는 CV의 P1~P13 기준 (CV P3는 NeurIPS 2026 채택작 C18과 같은 논문이라 제외)
     group: conf / journal / student (P 묶음1) / collab (P 묶음2)
     tag: 배지에 들어갈 짧은 이름. top: true → CVPR/ICCV/ECCV/NeurIPS 진한 배지
     area: Research 페이지 소제목 */
  publications: [
    // ----- Conference -----
    { id: "C18", group: "conf", tag: "NeurIPS", top: true, year: 2026, area: "1-A",
      title: "Disentangling Channel Semantics in Vision Transformers via Token Decorrelation and Composition-Aware Modulation",
      authors: "Daeun Kim, Hyejin Park, Hyesong Choi, and Dongbo Min",
      venue: "NeurIPS 2026" },
    { id: "C17", group: "conf", tag: "AISec", year: 2026, area: "3-B",
      title: "Why AI-Assisted Security Monitoring Is Hard to Deploy: A Taxonomy of Policy-to-Operation Gaps in Industrial Control Environments",
      authors: "Jeong-Han Yun, Jina Kang, and Hyesong Choi\u2020",
      venue: "AISec 2026 (ACM CCS Workshop on Artificial Intelligence and Security)" },
    { id: "C16", group: "conf", tag: "AGENT-SEC", year: 2026, area: "3-B",
      title: "When Recovery Fails Open: A Controlled Study of Execution-Layer Attack Surfaces in Browser Agents",
      authors: "Soobin Yim, ChanHyeok Lim, Thien-Phuc Doan, Hyesong Choi, and Souhwan Jung",
      venue: "AGENT-SEC 2026 (ACM CCS Workshop on Security, Privacy, and Safety of Agentic AI Systems)" },
    { id: "C15", group: "conf", tag: "ECCV", top: true, year: 2026, area: "1-A",
      title: "ECC: Encoder-Centric Corruption for Fine-Grained Vision in VLMs",
      authors: "Hyesong Choi, Daeun Kim, Sungmin Cha, Kwang Moo Yi, and Dongbo Min",
      venue: "ECCV 2026", note: "Collaboration with Meta and UBC" },
    { id: "C14", group: "conf", tag: "ECCV", top: true, year: 2026, area: "1-A",
      title: "Isotropic Embedding Perturbations for Robust Vision Language Encoders",
      authors: "Hyesong Choi, Daeun Kim, Song Park, Taekyung Kim, Byeongho Heo, Sangdoo Yun, Dongbo Min, and Dongyoon Han",
      venue: "ECCV 2026", note: "Collaboration with NAVER AI Lab (\u201cAether\u201d)" },
    { id: "C13", group: "conf", tag: "ECCV", top: true, year: 2026, area: "1-A",
      title: "Enhancing Alignment for Unified Multimodal Models via Semantically-Grounded Supervision",
      authors: "Jiyeong Kim, Yerim So, Hyesong Choi, Uiwon Hwang, and Dongbo Min",
      venue: "ECCV 2026", links: { paper: "https://arxiv.org/abs/2603.19807" } },
    { id: "C12", group: "conf", tag: "WISA", year: 2026, area: "3-B",
      title: "When Task Success Hides Took Misuse: Analyzing Silent Compromise in Browser-Use Agents", // CV 원문 그대로. "Took" → "Tool" 오타인지 교수님 확인 중
      authors: "Soobin Yim, ChanHyeok Lim, Hung Dinh-Xuan, Hyesong Choi, and Souhwan Jung",
      venue: "WISA 2026 (World Conference on Information Security Applications), Jeju, Korea" },
    { id: "C11", group: "conf", tag: "ICASSP", year: 2026, area: "1-C",
      title: "CLDA: Collaborative Learning for Enhanced Unsupervised Domain Adaptation",
      authors: "Minhee Cho, Hyesong Choi, Hayeon Jo, and Dongbo Min",
      venue: "ICASSP 2026", links: { paper: "https://arxiv.org/pdf/2409.02699" } },
    { id: "C10", group: "conf", tag: "NeurIPS", top: true, year: 2025, area: "2-B",
      title: "RobIA: Robust Instance-aware Continual Test-time Adaptation for Deep Stereo",
      authors: "Jueun Ko, Hyewon Park, Hyesong Choi, and Dongbo Min",
      venue: "NeurIPS 2025", links: { paper: "https://arxiv.org/abs/2511.10107" } },
    { id: "C9", group: "conf", tag: "CVPR", top: true, year: 2025, area: "1-C",
      title: "TADFormer: Task-Adaptive Dynamic TransFormer for Efficient Multi-Task Learning",
      authors: "Seungmin Baek, Soyul Lee, Hayeon Jo, Hyesong Choi, and Dongbo Min",
      venue: "CVPR 2025", links: { paper: "https://arxiv.org/pdf/2501.04293" } },
    { id: "C8", group: "conf", tag: "NeurIPS", top: true, year: 2024, area: "2-A",
      title: "A Simple Framework for Generalization in Visual RL under Dynamic Scene Perturbations",
      authors: "Wonil Song, Hyesong Choi, Kwanghoon Sohn, and Dongbo Min",
      venue: "NeurIPS 2024", links: { paper: "https://openreview.net/pdf?id=0AumdfLzpK" } },
    { id: "C7", group: "conf", tag: "ECCV", top: true, year: 2024, area: "1-A",
      title: "Salience-Based Adaptive Masking: Revisiting Token Dynamics for Enhanced Pre-training",
      authors: "Hyesong Choi, Hyejin Park, Kwang Moo Yi, Sungmin Cha, and Dongbo Min",
      venue: "ECCV 2024", links: { paper: "https://arxiv.org/pdf/2404.08327" } },
    { id: "C6", group: "conf", tag: "ECCV", top: true, year: 2024, area: "1-A",
      title: "Emerging Property of Masked Token for Effective Pre-training",
      authors: "Hyesong Choi, Hunsang Lee, Seyoung Joung, Hyejin Park, Jiyeong Kim, and Dongbo Min",
      venue: "ECCV 2024", links: { paper: "https://arxiv.org/pdf/2404.08330" } },
    { id: "C5", group: "conf", tag: "ICCV", top: true, year: 2023, area: "2-A",
      title: "Environment Agnostic Representation for Visual Reinforcement Learning",
      authors: "Hyesong Choi, Hunsang Lee, Seongwon Jeong, and Dongbo Min",
      venue: "ICCV 2023", links: { paper: "https://openaccess.thecvf.com/content/ICCV2023/papers/Choi_Environment_Agnostic_Representation_for_Visual_Reinforcement_Learning_ICCV_2023_paper.pdf" } },
    { id: "C4", group: "conf", tag: "CVPR", top: true, year: 2023, area: "2-A",
      title: "Local-Guided Global: Paired Similarity Representation for Visual Reinforcement Learning",
      authors: "Hyesong Choi, Hunsang Lee, Wonil Song, Sangryul Jeon, Kwanghoon Sohn, and Dongbo Min",
      venue: "CVPR 2023", links: { paper: "https://openaccess.thecvf.com/content/CVPR2023/papers/Choi_Local-Guided_Global_Paired_Similarity_Representation_for_Visual_Reinforcement_Learning_CVPR_2023_paper.pdf" } },
    { id: "C3", group: "conf", tag: "CVPR", top: true, year: 2022, area: "2-B",
      title: "KNN Local Attention for Image Restoration",
      authors: "Hunsang Lee, Hyesong Choi, Kwanghoon Sohn, and Dongbo Min",
      venue: "CVPR 2022", links: { paper: "https://openaccess.thecvf.com/content/CVPR2022/papers/Lee_KNN_Local_Attention_for_Image_Restoration_CVPR_2022_paper.pdf" } },
    { id: "C2", group: "conf", tag: "ICIP", year: 2022, area: "2-B",
      title: "Sequential Cross Attention Based Multi-Task Learning",
      authors: "Sunkyung Kim, Hyesong Choi, and Dongbo Min",
      venue: "ICIP 2022", links: { paper: "https://arxiv.org/pdf/2209.02518" } },
    { id: "C1", group: "conf", tag: "ICCV", top: true, year: 2021, area: "2-B",
      title: "Adaptive Confidence Thresholding for Monocular Depth Estimation",
      authors: "Hyesong Choi*, Hunsang Lee*, Sunkyung Kim, Sunok Kim, Seungryong Kim, Kwanghoon Sohn, and Dongbo Min",
      venue: "ICCV 2021", links: { paper: "https://openaccess.thecvf.com/content/ICCV2021/papers/Choi_Adaptive_Confidence_Thresholding_for_Monocular_Depth_Estimation_ICCV_2021_paper.pdf" } },

    // ----- Journal -----
    { id: "J6", group: "journal", tag: "IEEE Access", year: 2026, area: "1-C",
      title: "Addressing Class Imbalance in Contrastive Knowledge Distillation via Teacher-Guided Feature Augmentation for Semantic Segmentation",
      authors: "Jiyeong Kim, Hyesong Choi, Seongwon Jeong, Keonhee Ahn, and Dongbo Min",
      venue: "IEEE Access, 2026" },
    { id: "J5", group: "journal", tag: "IEEE Access", year: 2025, area: "2-B",
      title: "UniTT-Stereo: Unified Training of Transformer for Enhanced Stereo Matching",
      authors: "Soomin Kim, Hyesong Choi, Jihye Ahn, and Dongbo Min",
      venue: "IEEE Access, 2025", links: { paper: "https://arxiv.org/pdf/2409.02545" } },
    { id: "J4", group: "journal", tag: "IEEE Access", year: 2025, area: "1-C",
      title: "Global Structural Knowledge Distillation for Semantic Segmentation",
      authors: "Hyejin Park, Keonhee Ahn, Hyesong Choi, and Dongbo Min",
      venue: "IEEE Access, 2025", links: { paper: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=11018413" } },
    { id: "J3", group: "journal", tag: "IEEE Access", year: 2025, area: "2-B",
      title: "MaDis-Stereo: Enhanced Stereo Matching via Distilled Masked Image Modeling",
      authors: "Jihye Ahn, Hyesong Choi, Soomin Kim, and Dongbo Min",
      venue: "IEEE Access, 2025", links: { paper: "https://arxiv.org/pdf/2409.02846" } },
    { id: "J2", group: "journal", tag: "IEEE Access", year: 2023, area: "2-B",
      title: "Cross-Scale KNN Image Transformer for Image Restoration",
      authors: "Hunsang Lee, Hyesong Choi, Kwanghoon Sohn, and Dongbo Min",
      venue: "IEEE Access, 2023", links: { paper: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10036436" } },
    { id: "J1", group: "journal", tag: "ESWA", year: 2023, area: "2-A",
      title: "Learning Disentangled Skills for Hierarchical Reinforcement Learning through Trajectory Autoencoder with Weak Labels",
      authors: "Wonil Song, Sangryul Jeon, Hyesong Choi, Kwanghoon Sohn, and Dongbo Min",
      venue: "Expert Systems with Applications (ESWA), IF 7.5, 2023", links: { paper: "https://www.sciencedirect.com/science/article/abs/pii/S0957417423011272" } },

    // ----- Manuscripts under Review and Preprints: 묶음 1 (학생 주도, CV에서 밑줄 학생 1저자) -----
    { id: "P13", group: "student", tag: "Under review", year: 2026, area: "1-A",
      title: "Vision-Language Models Cannot Tell What Moves Without Knowing How They Move",
      authors: "_Yoonsu Kim_ and Hyesong Choi\u2020",
      venue: "Under review, 2026" },
    { id: "P12", group: "student", tag: "Under review", year: 2026, area: "1-C",
      title: "Deeper Is Not Better for Quantized CLIP: Early Readout Recovers Accuracy While Cutting Compute",
      authors: "_Kahyeon Nam_ and Hyesong Choi\u2020",
      venue: "Under review, 2026" },
      // 이전 제목 "The Rescue Effect" arXiv 링크: http://arxiv.org/abs/2605.26415 (CV에 arXiv 표기 없어 일단 뺌)
    { id: "P11", group: "student", tag: "Under review", year: 2026, area: "3-A",
      title: "Rationale Content Shapes What a Detector Learns: Controlled Supervision for Person-Centric AI-Image Forensics",
      authors: "_Jihyeon Kim_, _Sohee Kim_, _Soosan Lee_, and Hyesong Choi\u2020",
      venue: "Under review, 2026" },
    { id: "P10", group: "student", tag: "Under review", year: 2026, area: "1-C",
      title: "The Price of a Merge Is Paid in Depth: A Tight, Label-Free Bound on Token Merging in Vision Transformers",
      authors: "_Semi Lee_, _Hyejin Go_, and Hyesong Choi\u2020",
      venue: "Under review, 2026" },
      // 이전 제목 "AdaMerge" arXiv 링크: https://arxiv.org/abs/2605.27465 (CV에 arXiv 표기 없어 일단 뺌)
    { id: "P9", group: "student", tag: "Under review", year: 2026, area: "1-B",
      title: "Aligned Is Not Supported: Attributing Image\u2013Text Alignment to Caption Phrases for Data Selection",
      authors: "_Hyejin Go_, _Semi Lee_, and Hyesong Choi\u2020",
      venue: "Under review, 2026" },
      // 이전 제목 "Counterfactual Phrase Intervention" arXiv 링크: https://arxiv.org/abs/2605.22651 (CV에 arXiv 표기 없어 일단 뺌)
    { id: "P8", group: "student", tag: "arXiv", year: 2026, area: "3-A",
      title: "When Eyes Betray AI: Social Gaze Consistency as a Semantic Cue for AI-Generated Image Detection",
      authors: "_Jihyeon Kim_, _Sohee Kim_, _Soosan Lee_, Souhwan Jung, James M. Rehg, and Hyesong Choi\u2020",
      venue: "arXiv:2605.27348, 2026", note: "Collaboration with UIUC",
      links: { paper: "https://arxiv.org/abs/2605.27348" } },
    { id: "P7", group: "student", tag: "Under review", year: 2026, area: "3-B",
      title: "LLM Verifiers Are Wrong Together: Confident Consensus Errors Set the Floor for Failure Prediction",
      authors: "_Soyeon Oh_ and Hyesong Choi\u2020",
      venue: "Under review, 2026" },
    { id: "P6", group: "student", tag: "Under review", year: 2026, area: "3-B",
      title: "Influential but Misaligned: LLM Evidence Drives Predictions Yet Misses What Institutions Classified",
      authors: "_Jihyeon Kim_, _Sohee Kim_, and Hyesong Choi\u2020",
      venue: "Under review, 2026" },
    { id: "P5", group: "student", tag: "Under review", year: 2026, area: "3-A",
      title: "Most of the Ablation Gain Was the Baseline\u2019s Training Budget: A Placebo-Controlled Audit of Evidence-Guided Deepfake Detection",
      authors: "_Soosan Lee_ and Hyesong Choi\u2020",
      venue: "Under review, 2026" },

    // ----- 묶음 2 (First-author and collaborative work) -----
    { id: "P4", group: "collab", tag: "Under review", year: 2026, area: "1-B",
      title: "Select What Resists Compression: Reconstruction Code Length for Label-Free Data Selection",
      authors: "Hyesong Choi, Daeun Kim, Seungmin Baek, Taekyung Kim, Byeongho Heo, Dongbo Min, and Dongyoon Han",
      venue: "Under review, 2026", note: "Collaboration with NAVER AI Lab" },
    // CV의 P3 (Disentangling Channel Semantics...)는 NeurIPS 2026 채택작 C18과 같은 논문이라 넣지 않음
    { id: "P2", group: "collab", tag: "Under review", year: 2026, area: "1-A",
      title: "Bootstrap Your Own Noise: Denoising and Latent Prediction Cooperate Only When Noise Is Informative and Alignment Is Gated",
      authors: "Hyesong Choi, Daeun Kim, and Dongbo Min",
      venue: "Under review, 2026" },
    { id: "P1", group: "collab", tag: "Preprint", year: 2025, area: "3-C",
      title: "Student-Guided Teacher Adaptation for Robust Adversarial Distillation",
      authors: "Hyejin Park, Hyesong Choi, and Dongbo Min",
      venue: "Preprint, 2025" },

    // ----- CV에서 빠진 기존 논문 (pending: true → 화면에 안 보임) -----
    // 교수님이 빼라고 하시면 이 4개 삭제, 다시 넣으라고 하시면 pending 지우고 번호 부여
    { id: "X1", group: "collab", tag: "arXiv", year: 2024, area: "1-A", pending: true,
      title: "How Should Corruption Be Used in SSL? Empirical Insights for Effective Pretraining",
      authors: "Hyesong Choi, Daeun Kim, Sungmin Cha, Kwang Moo Yi, and Dongbo Min",
      venue: "arXiv:2412.19104", links: { paper: "https://arxiv.org/abs/2412.19104" } },
    { id: "X2", group: "collab", tag: "Preprint", year: 2025, area: "app-bio", pending: true,
      title: "Rethinking Masked Autoencoders for Multi-Channel Fluorescence Microscopy: Adaptive Inter-Channel Masking",
      authors: "Daeun Kim, Hyesong Choi, Hyejin Park, and Dongbo Min",
      venue: "Preprint, 2025" },
    { id: "X3", group: "collab", tag: "arXiv", year: 2024, area: "1-C", pending: true,
      title: "iConFormer: Dynamic Parameter-Efficient Tuning with Input-Conditioned Adaptation",
      authors: "Hayeon Jo, Hyesong Choi, Minhee Cho, and Dongbo Min",
      venue: "arXiv:2409.02838", links: { paper: "https://arxiv.org/abs/2409.02838" } },
    { id: "X4", group: "collab", tag: "arXiv", year: 2024, area: "1-A", pending: true,
      title: "SG-MIM: Structured Knowledge Guided Efficient Pre-training for Dense Prediction",
      authors: "Sumin Son, Hyesong Choi, and Dongbo Min",
      venue: "arXiv:2409.02513", links: { paper: "https://arxiv.org/abs/2409.02513" } }
  ]
};


/* =========================================================
   아래부터는 화면 동작 코드 (보통 수정할 필요 없음)
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {
  /* ---------- 모바일 메뉴 ---------- */
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* ---------- 공통 도우미 ---------- */
  const DATA = window.SAIL_DATA || {};

  function esc(str) {
    return String(str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // 저자 문자열 → HTML (교수님 굵게, _학생_ 밑줄)
  function formatAuthors(authors) {
    return esc(authors)
      .replace(/Hyesong Choi/g, '<strong class="pi-name">Hyesong Choi</strong>')
      .replace(/_([^_]+)_/g, '<u class="sail-student">$1</u>');
  }

  const BADGE_CLASS = {
    Paper: 'badge--paper', Grant: 'badge--grant', Talk: 'badge--talk',
    Service: 'badge--service', Media: 'badge--media'
  };
  function badge(cat) {
    return '<span class="badge ' + (BADGE_CLASS[cat] || 'badge--plain') + '">' + esc(cat) + '</span>';
  }

  function relatedLinks(keys) {
    if (!keys || !DATA.articles) return '';
    const urls = keys.map((k) => DATA.articles[k]).filter(Boolean);
    if (!urls.length) return '';
    return ' <span class="news-links">' + urls.map((u, i) =>
      '<a href="' + esc(u) + '" target="_blank" rel="noopener noreferrer">[Related Article ' + (i + 1) + ']</a>'
    ).join(' ') + '</span>';
  }

  function newsRow(item) {
    return '<li class="news-row' + (item.star ? ' is-star' : '') + '">' +
      '<span class="news-row-date">' + esc(item.date) + '</span>' +
      badge(item.cat) +
      '<p class="news-row-text">' + esc(item.text) + relatedLinks(item.links) + '</p>' +
      '</li>';
  }

  const visibleNews = (DATA.news || []).filter((n) => !n.pending);

  /* ---------- Upcoming 상자 ---------- */
  document.querySelectorAll('[data-render="upcoming"]').forEach((box) => {
    const now = new Date();
    const items = (DATA.upcoming || []).filter((u) =>
      !u.until || now <= new Date(u.until + 'T23:59:59+09:00'));
    if (!items.length) { box.hidden = true; return; }
    box.innerHTML = '<p class="news-upcoming-title">Upcoming</p><ul class="news-upcoming-list">' +
      items.map(newsRow).join('') + '</ul>';
  });

  /* ---------- News 목록 (data-limit 개수만큼) ---------- */
  document.querySelectorAll('[data-render="news"]').forEach((list) => {
    const limit = parseInt(list.dataset.limit, 10) || visibleNews.length;
    list.innerHTML = visibleNews.slice(0, limit).map(newsRow).join('');
  });

  /* ---------- News 전체 페이지 (연도별 묶음) ---------- */
  document.querySelectorAll('[data-render="news-archive"]').forEach((box) => {
    const years = [];
    visibleNews.forEach((n) => {
      const y = n.date.slice(0, 4);
      let group = years.find((g) => g.year === y);
      if (!group) { group = { year: y, items: [] }; years.push(group); }
      group.items.push(n);
    });
    box.innerHTML = years.map((g) =>
      '<div class="news-year-group">' +
        '<h3>' + esc(g.year) + '</h3>' +
        '<ul class="news-feed">' + g.items.map(newsRow).join('') + '</ul>' +
      '</div>'
    ).join('');
  });

  /* ---------- Recent Papers by Research Area 카드 ---------- */
  const pubById = {};
  (DATA.publications || []).forEach((p) => { pubById[p.id] = p; });

  function venueLabel(p) {
    if (p.tag === 'Under review') return 'Under review, ' + p.year;
    return p.tag + ' ' + p.year;
  }

  document.querySelectorAll('[data-render="area-cards"]').forEach((grid) => {
    grid.innerHTML = (DATA.pillars || []).map((pillar) => {
      const papers = pillar.homePapers.map((id) => pubById[id]).filter(Boolean);
      return '<a class="area-card" href="research.html#' + esc(pillar.id) + '">' +
        '<h3 class="area-name">' + esc(pillar.name) + '</h3>' +
        '<p class="area-desc">' + esc(pillar.desc) + '</p>' +
        '<ul class="area-papers">' + papers.map((p) =>
          '<li class="area-paper">' +
            '<span class="venue' + (p.top ? ' venue--top' : '') + '">' + esc(venueLabel(p)) + '</span>' +
            '<span class="area-paper-title">[' + esc(p.id) + '] ' + esc(p.title) + '</span>' +
            '<span class="area-paper-authors">' + formatAuthors(p.authors) + '</span>' +
          '</li>').join('') +
        '</ul>' +
        '<span class="area-more">View in Research</span>' +
        '</a>';
    }).join('');
  });

  /* ---------- 논문 목록: <ul data-papers="C14, C13, ..."> ----------
     HTML에 적은 번호 순서대로 논문 카드를 그립니다. (Research, Publications 공용) */
  const PUB_BUTTONS = [['paper', 'Paper'], ['code', 'Code'], ['project', 'Project']];

  function pubItem(p, withButtons) {
    const links = p.links || {};
    const title = '[' + esc(p.id) + '] ' + esc(p.title);
    const head = links.paper
      ? '<a class="publication-title" href="' + esc(links.paper) + '" target="_blank" rel="noopener noreferrer">' + title + '</a>'
      : '<span class="publication-title no-link">' + title + '</span>';
    // [Paper] [Code] [Project] 버튼: 링크가 있는 것만 표시
    const buttons = withButtons
      ? PUB_BUTTONS.filter(([key]) => links[key]).map(([key, label]) =>
          '<a class="pub-btn" href="' + esc(links[key]) + '" target="_blank" rel="noopener noreferrer">' + label + '</a>'
        ).join('')
      : '';
    return '<li class="publication-item" id="paper-' + esc(p.id) + '">' + head +
      (buttons ? '<div class="pub-actions">' + buttons + '</div>' : '') +
      '<p class="publication-meta">' + formatAuthors(p.authors) + '</p>' +
      '<div class="pub-venue">' +
        '<span class="venue' + (p.top ? ' venue--top' : '') + '">' + esc(p.tag) + '</span>' +
        '<span>' + esc(p.venue) + '</span>' +
        (p.note ? '<span class="pub-note">' + esc(p.note) + '</span>' : '') +
      '</div></li>';
  }

  /* Publications 페이지: <ul data-pub-group="conf"> → 그 묶음 논문 전체 (데이터 순서대로) */
  document.querySelectorAll('[data-pub-group]').forEach((list) => {
    const group = list.dataset.pubGroup;
    list.innerHTML = (DATA.publications || [])
      .filter((p) => p.group === group && !p.pending)
      .map((p) => pubItem(p, true)).join('');
  });

  document.querySelectorAll('[data-papers]').forEach((list) => {
    const ids = list.dataset.papers.split(',').map((x) => x.trim()).filter(Boolean);
    list.innerHTML = ids.map((id) => pubById[id])
      .filter((p) => p && !p.pending)
      .map(pubItem).join('');
  });

  /* ---------- 주소에 #위치가 있으면, 목록을 다 그린 뒤 다시 그 위치로 이동 ---------- */
  if (window.location.hash) {
    const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
    if (target) {
      const jump = () => {
        const html = document.documentElement;
        const prev = html.style.scrollBehavior;
        html.style.scrollBehavior = 'auto'; // 부드러운 스크롤 잠시 끄기
        target.scrollIntoView({ block: 'start' });
        html.style.scrollBehavior = prev;
      };
      jump();
      window.addEventListener('load', jump, { once: true });
    }
  }
});
