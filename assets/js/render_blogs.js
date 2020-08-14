function render_blogs(){
  var myObj = JSON.parse('[{"title": "4 Reasons to Use Kubernetes in the Serverless Era", "subtitle": "Is serverless a replacement for Kubernetes?", "image_id": "0*T-jwYbtS44Rm9ccG", "link": "https://medium.com/better-programming/4-reasons-to-use-kubernetes-in-the-serverless-era-cf77ea3b018b?source=friends_link&sk=55f13f50a43bd3b756a54535721adca2", "published": "Aug-13", "read": "4 min read", "published_on": "In Better Programming"}, {"title": "Tips for Rightsizing Your Kubernetes Cluster", "subtitle": "A few large nodes or many small nodes?", "image_id": "1*9jZLjslLwbMW18RWPd-9uQ.jpeg", "link": "https://medium.com/better-programming/tips-for-rightsizing-your-kubernetes-cluster-e0a8f1093d8d?source=friends_link&sk=63d98a3e914298448e4f684f54efa51b", "published": "Aug-10", "read": "8 min read", "published_on": "In Better Programming"}, {"title": "Designing Highly Available Container Applications Kubernetes", "subtitle": "With pod disruptibudgets and anti-affinity", "image_id": "0*BAhglWQXDtTQ2o9L", "link": "https://medium.com/better-programming/designing-highly-available-container-applications-on-kubernetes-50455716b76f?source=friends_link&sk=965d54623f26d256a0fdae5724befaa2", "published": "Aug-04", "read": "5 min read", "published_on": "In Better Programming"}, {"title": "My Experience With the CNCF Certified Kubernetes Administrator Exam", "subtitle": "Tips for cracking the Certified Kubernetes Administrator Exam", "image_id": "1*ILKk25-VR3-4E3wT5RBnqQ.png", "link": "https://medium.com/the-innovation/my-experience-with-the-cncf-certified-kubernetes-administrator-exam-12247d87baf2?source=friends_link&sk=a93428b351503093070df640fcafb921", "published": "Jul-31", "read": "9 min read", "published_on": "In The Innovation"}, {"title": "Awesome Kubernetes Command-Line Hacks", "subtitle": "Tips for you to kubectl like a pro", "image_id": "0*4ve38-UVey9BKYr1", "link": "https://medium.com/better-programming/awesome-kubernetes-command-line-hacks-8bd3604e394f?source=friends_link&sk=92409252acb8b8c36a1d8d4752c104b7", "published": "Jul-27", "read": "4 min read", "published_on": "In Better Programming"}, {"title": "Choose the Right Kubernetes Hosting Solution", "subtitle": "Things to consider while selecting a Kubernetes platform", "image_id": "1*fCOBpevfigJ0COX_de0TBQ.jpeg", "link": "https://medium.com/better-programming/choose-the-right-kubernetes-hosting-solution-a842878fc594?source=friends_link&sk=791763e4a919db5f474920a1c2e0a0d4", "published": "Jul-24", "read": "6 min read", "published_on": "In Better Programming"}, {"title": "Secure Your Kubernetes Cluster With Pod Security Policies", "subtitle": "Pod security best practices with a hands-exercise", "image_id": "1*An-yFGrhzXxF1ZoX5kDfKw.jpeg", "link": "https://medium.com/better-programming/secure-your-kubernetes-cluster-with-pod-security-policies-bd511ec6d034?source=friends_link&sk=f61773fbd4280debff4fd876d9640957", "published": "Jul-16", "read": "6 min read", "published_on": "In Better Programming"}, {"title": "Monitor Your Kubernetes Cluster With Prometheus and Grafana", "subtitle": "Using Helm to set up Prometheus and Grafana your Kubernetes cluster", "image_id": "0*z2Mt8-HFC6hPzojI", "link": "https://medium.com/better-programming/monitor-your-kubernetes-cluster-with-prometheus-and-grafana-1f7d0195e59?source=friends_link&sk=9da23c0650a7cf4db977bb859bcf0e7f", "published": "Jul-14", "read": "5 min read", "published_on": "In Better Programming"}, {"title": "How to Save Money Google Cloud Platform", "subtitle": "Use Cloud Scheduler to start and stop Compute Engine Instances automatically", "image_id": "1*1WZ7bKpNopZVndeHSuqd4g.jpeg", "link": "https://medium.com/better-programming/how-to-save-money-on-google-cloud-platform-22bf4c302d32?source=friends_link&sk=13911a9a97a7d7896658275cb8975703", "published": "Jul-03", "read": "5 min read", "published_on": "In Better Programming"}, {"title": "Managing Multiple Environments in Terraform", "subtitle": "How to use Terraform workspaces to manage multiple states", "image_id": "0*lU4ggR_EAsvnhnXJ", "link": "https://medium.com/better-programming/managing-multiple-environments-in-terraform-5b389da3a2ef?source=friends_link&sk=c89327c9a41b6ef94702dea62400e3fc", "published": "Jul-01", "read": "5 min read", "published_on": "In Better Programming"}, {"title": "Effective Ways of Managing Your Terraform State", "subtitle": "Collaboration in your team with remote-state back ends", "image_id": "1*BTQjw2waLJ_-5pnatoRvZg.jpeg", "link": "https://medium.com/better-programming/effective-ways-of-managing-your-terraform-state-44bc53043d5?source=friends_link&sk=a2f457764e1cc148e6e5e568ad851965", "published": "Jun-26", "read": "5 min read", "published_on": "In Better Programming"}, {"title": "Choosing the Right Git Branching Strategy for Your Team", "subtitle": "Analysis of Multiple Branching Strategies with a Flowchart", "image_id": "1*C208VoVCv8VTMYso-paPYQ.png", "link": "https://medium.com/dev-genius/choosing-the-right-git-branching-strategy-for-your-team-2a53144fcbdb?source=friends_link&sk=d60b50a001d5fcd4a2b43a0ef861b615", "published": "Jun-25", "read": "6 min read", "published_on": "In Dev Genius"}, {"title": "Monitor your Kubernetes Resources With kubewatch", "subtitle": "Watch Kubernetes events,  and send notifications to Slack", "image_id": "1*BYxPEIohx99eJA403WI4wQ.jpeg", "link": "https://medium.com/better-programming/monitor-your-kubernetes-resources-with-kubewatch-d40ecf420f28?source=friends_link&sk=71e16255d194a3532e845a2a258a3b10", "published": "Jun-24", "read": "3 min read", "published_on": "In Better Programming"}, {"title": "Kubernetes Services over HTTPS With Istio\u2019s Secure Gateways", "subtitle": "Expose your microservices over TLS to the external world", "image_id": "1*mlMaK0mb-DJWTg7vpcO47w.jpeg", "link": "https://medium.com/better-programming/kubernetes-services-over-https-with-istios-secure-gateways-210b2ce91b71?source=friends_link&sk=9b3dfbacb57239c1c6e7230273dd556e", "published": "Jun-19", "read": "5 min read", "published_on": "In Better Programming"}, {"title": "Encrypting Kubernetes Secrets With Sealed Secrets", "subtitle": "How to store your Kubernetes secrets in Git", "image_id": "1*l9La4SoBS2-yDkLtW1ZlIw.jpeg", "link": "https://medium.com/better-programming/encrypting-kubernetes-secrets-with-sealed-secrets-fe363149a211?source=friends_link&sk=c8be1a52530b09adc8983029359d0169", "published": "Jun-15", "read": "7 min read", "published_on": "In Better Programming"}, {"title": "How to Harden Your Containers With Distroless Docker Images", "subtitle": "Use distroless images to secure your containers Kubernetes", "image_id": "1*BzI7kEVusRnhIQnS0TCecA.jpeg", "link": "https://medium.com/better-programming/how-to-harden-your-containers-with-distroless-docker-images-c2abd7c71fdb?source=friends_link&sk=f52e1261a4590b11e1a828f49b6fa3e5", "published": "Jun-04", "read": "6 min read", "published_on": "In Better Programming"}, {"title": "How to Harden Your Kubernetes Cluster With Kube Bench", "subtitle": "Comprehensive CIS benchmark testing for your Kubernetes cluster", "image_id": "1*yxvYBRAlEzI_iCBLyiU0IA.jpeg", "link": "https://medium.com/better-programming/how-to-harden-your-kubernetes-cluster-with-kube-bench-fae71eb24d8?source=friends_link&sk=42775f1c3a29862239dfc10b2605d31e", "published": "Jun-03", "read": "5 min read", "published_on": "In Better Programming"}, {"title": "Demystifying DevOps", "subtitle": "DevOps is no longer an option, either you adopt it or you lose", "image_id": "1*jRGHzBpG_Yj9Jh3yh8bnOw.png", "link": "https://medium.com/better-programming/demystifying-devops-840aa292054a?source=friends_link&sk=4ab29123a559742f16a854ed05623350", "published": "Jun-03", "read": "7 min read", "published_on": "In Better Programming"}, {"title": "Locality-Based Load Balancing in Kubernetes Using Istio", "subtitle": "Route requests within your service mesh using geographic locatito improve performance and save money", "image_id": "0*-cDFcKrvzEu2E4u1", "link": "https://medium.com/better-programming/locality-based-load-balancing-in-kubernetes-using-istio-a4a9defa05d3?source=friends_link&sk=ea300c2f039dc8f30c690f01dae46327", "published": "Jun-01", "read": "6 min read", "published_on": "In Better Programming"}, {"title": "How to Validate Your Kubernetes Cluster With Sonobuoy", "subtitle": "Run comprehensive conformance testing for your Kubernetes cluster", "image_id": "1*0jO90OhiZvz45pU7S869hA.jpeg", "link": "https://medium.com/better-programming/how-to-validate-your-kubernetes-cluster-with-sonobuoy-c91b282908fe?source=friends_link&sk=62e7ec05fa19a24411e7979ffe121dcf", "published": "May-28", "read": "4 min read", "published_on": "In Better Programming"}, {"title": "How to Build Containers in a Kubernetes Cluster with Kaniko", "subtitle": "Automate container builds within K8s without a Docker daemon", "image_id": "1*l85zI6ot5txddTGeDq7BiA.png", "link": "https://medium.com/better-programming/how-to-build-containers-in-a-kubernetes-cluster-with-kaniko-2d01cd3242a7?source=friends_link&sk=fc09a060bcaaca0042ce6c7a51f20ddf", "published": "May-27", "read": "6 min read", "published_on": "In Better Programming"}, {"title": "How to Continuously Deliver Kubernetes Applications With Flux CD", "subtitle": "GitOps for your Kubernetes workloads", "image_id": "1*sAVHfapQ9o1pm5yyCc1WKQ.jpeg", "link": "https://medium.com/better-programming/how-to-continuously-deliver-kubernetes-applications-with-flux-cd-502e4fb8ccfe?source=friends_link&sk=bceb59badf7e71a216fb597770900bfd", "published": "May-26", "read": "7 min read", "published_on": "In Better Programming"}, {"title": "Istio Service Mesh Multi-Cluster Kubernetes Environment", "subtitle": "Manage microservices running multiple Kubernetes clusters in a single service mesh", "image_id": "1*Xpbg9kPSIOv-flCUChv5xw.jpeg", "link": "https://medium.com/better-programming/istio-service-mesh-on-multi-cluster-kubernetes-environment-518094cdcdc4?source=friends_link&sk=22c02e803a5ef1c3473a79f50dfbec49", "published": "May-25", "read": "6 min read", "published_on": "In Better Programming"}, {"title": "Traffic Mirroring in Kubernetes Using Istio", "subtitle": "How to run robust operational acceptance tests for your Kubernetes microservices", "image_id": "1*IOg4ZlvI8cwy93rnnLVXMw.jpeg", "link": "https://medium.com/better-programming/traffic-mirroring-in-kubernetes-using-istio-dad0976b4e1?source=friends_link&sk=04be0e97bc4974592470598e7c5b5f78", "published": "May-22", "read": "6 min read", "published_on": "In Better Programming"}, {"title": "How to Authorize Non-Kubernetes Clients With Istio Your K8s Cluster", "subtitle": "Use JSON web tokens to authorize clients to interact with your Kubernetes microservices using Istio", "image_id": "1*bsKcUBHiLMCAQPmPILgHCA.jpeg", "link": "https://medium.com/better-programming/how-to-authorize-non-kubernetes-clients-with-istio-on-your-k8s-cluster-8a90fe95b137?source=friends_link&sk=f44c88d1dae42bb7faa9b52f10f92ebe", "published": "May-20", "read": "5 min read", "published_on": "In Better Programming"}, {"title": "Enable Access Control Between Your Kubernetes Workloads Using Istio", "subtitle": "A guide to Istio authorizatibetween your microservices within Kubernetes", "image_id": "1*pffSuk3T7wjlkp5izE-9nQ.jpeg", "link": "https://medium.com/better-programming/enable-access-control-between-your-kubernetes-workloads-using-istio-cf72a9f9bd5e?source=friends_link&sk=a5c9ddc4eeeccf7e62a2551014ef4803", "published": "May-19", "read": "4 min read", "published_on": "In Better Programming"}, {"title": "Enable Mutual TLS AuthenticatiBetween Your Kubernetes Workloads Using Istio", "subtitle": "A guide to Istio authenticatiand mutual TLS between your microservices Kubernetes", "image_id": "1*q_4OezvkEa-wVB20bvpjaA.jpeg", "link": "https://medium.com/better-programming/enable-mutual-tls-authentication-between-your-kubernetes-workloads-using-istio-65338c8adf82?source=friends_link&sk=63890188e7ae48e7576e5ce66c10b57d", "published": "May-13", "read": "5 min read", "published_on": "In Better Programming"}, {"title": "How to Harden Your Microservices Kubernetes Using Istio", "subtitle": "How Istio implements security for your microservices", "image_id": "1*g0zGM7_4j0jmEo4IEzhnhQ.jpeg", "link": "https://medium.com/better-programming/how-to-harden-your-microservices-on-kubernetes-using-istio-29c23dd90670?source=friends_link&sk=879a41beb17056e833a9a287212f4b9a", "published": "May-12", "read": "6 min read", "published_on": "In Better Programming"}, {"title": "How to Visualise Your Istio Service Mesh Kubernetes", "subtitle": "Use Prometheus and Grafana to visualise the metrics of your microservices", "image_id": "1*pPM9DzL3h8tUn1_U4gR9LA.jpeg", "link": "https://medium.com/better-programming/how-to-visualise-your-istio-service-mesh-on-kubernetes-209c7b439a41?source=friends_link&sk=30a1f6db7c82a1f3656911fa19f227bd", "published": "May-08", "read": "5 min read", "published_on": "In Better Programming"}, {"title": "How to Use Istio to Inject Faults to Troubleshoot Microservices in Kubernetes", "subtitle": "Improve your microservices running Kubernetes", "image_id": "1*MwXaQ7Mx8IEGILGwQishZg.jpeg", "link": "https://medium.com/better-programming/how-to-use-istio-to-inject-faults-to-troubleshoot-microservices-in-kubernetes-108250a85abc?source=friends_link&sk=6fea51561af37fe93d2b35616ae8e15c", "published": "May-04", "read": "6 min read", "published_on": "In Better Programming"}, {"title": "How to Manage Traffic Using Istio Kubernetes", "subtitle": "Insights into request routing  traffic splitting and user identity-based routing using Istio Kubernetes", "image_id": "0*VE29ZE70iu00jmBB", "link": "https://medium.com/better-programming/how-to-manage-traffic-using-istio-on-kubernetes-cd4b96e00b57?source=friends_link&sk=725bf02f01c5fdf9e0a54f88909cd268", "published": "Apr-30", "read": "6 min read", "published_on": "In Better Programming"}, {"title": "Getting Started With Istio Kubernetes", "subtitle": "Install and configure Istio within your Kubernetes cluster", "image_id": "0*vNF1YOd0GFz0x609", "link": "https://medium.com/better-programming/getting-started-with-istio-on-kubernetes-e582800121ea?source=friends_link&sk=3a3c0b65a95692c3c5edbd0ea650b284", "published": "Apr-28", "read": "7 min read", "published_on": "In Better Programming"}, {"title": "How Istio Works Behind the Scenes Kubernetes", "subtitle": "Insights into Istio architecture and how its various moving parts manage microservices in Kubernetes", "image_id": "1*9s5xMyOyZn4kswHD1kc6Fw.jpeg", "link": "https://medium.com/better-programming/how-istio-works-behind-the-scenes-on-kubernetes-aeb8003f2cb5?source=friends_link&sk=9230c6269c3dde98c356a27603b00e37", "published": "Apr-27", "read": "7 min read", "published_on": "In Better Programming"}, {"title": "How to CI/CD Google Cloud Platform", "subtitle": "Using Cloud Build, Google Container Registry, and Cloud Run to continuously build and deploy a simple Java application", "image_id": "0*639cEyVUL2Nd2TWU", "link": "https://medium.com/swlh/how-to-ci-cd-on-google-cloud-platform-1e631cded335?source=friends_link&sk=07d3d86dffd8c45ef9bfa64914cd71cf", "published": "Apr-27", "read": "5 min read", "published_on": "In The Startup"}, {"title": "How Corporate Parasites thrive in the workplace", "subtitle": "Ways to identify and weed out PerceptiManagement from your organisation", "image_id": "0*rsNg400LQfTBHqRW", "link": "https://medium.com/datadriveninvestor/how-corporate-parasites-thrive-in-the-workplace-5368b446f244?source=friends_link&sk=291ccdd302edefe7e0a23261f58336f4", "published": "Apr-25", "read": "6 min read", "published_on": "In Data Driven Investor"}, {"title": "How to Manage Microservices Kubernetes With Istio", "subtitle": "How to implement DevSecOps microservices architecture with a service mesh", "image_id": "1*52Wm1a8SR7XTWM-XMCyKug.jpeg", "link": "https://medium.com/better-programming/how-to-manage-microservices-on-kubernetes-with-istio-c25e97a60a59?source=friends_link&sk=2477d2ededc816e5309ab1778599b8e1", "published": "Apr-24", "read": "6 min read", "published_on": "In Better Programming"}, {"title": "How to Scale Kubernetes Applications Using Custom Metrics", "subtitle": "Scale your containers using custom Stackdriver metrics that are important to your business", "image_id": "0*EkgNtmZL0OipjIM1", "link": "https://medium.com/better-programming/how-to-scale-kubernetes-applications-using-custom-metrics-6cf02571c5e4?source=friends_link&sk=11820cc5bd287f6650513bbff59980d1", "published": "Apr-22", "read": "8 min read", "published_on": "In Better Programming"}, {"title": "How to Secure Kubernetes Using Network Policies", "subtitle": "An illustrated guide to Kubernetes network policies", "image_id": "0*UxM8DoQHShWLbXdI", "link": "https://medium.com/better-programming/how-to-secure-kubernetes-using-network-policies-bbb940909364?source=friends_link&sk=1b817da088a6785fe6390edc349a24d4", "published": "Apr-22", "read": "9 min read", "published_on": "In Better Programming"}, {"title": "How to Discover non-Kubernetes applications using Kubernetes Service Discovery", "subtitle": "How to use Ingress Resources to discover Non-Kubernetes services using NGINX and BIND DNS", "image_id": "0*3O7PwBTVgabeCEXu", "link": "https://medium.com/@bharatmicrosystems/service-discovery-of-non-kubernetes-workloads-from-kubernetes-and-vice-versa-84a575ec4d8?source=friends_link&sk=de18ab5c72d4302c1634884230040213", "published": "Apr-21", "read": "7 min read", "published_on": "Self"}, {"title": "How to Secure Kubernetes the Easy Way", "subtitle": "How to use Terraform and Kubeadm to bootstrap your Kubernetes cluster", "image_id": "0*Z-7kVZsMK0OE-N5_", "link": "https://medium.com/swlh/how-to-secure-kubernetes-the-easy-way-f37052139280?source=friends_link&sk=869004b4fd8383333efa0eb8186206da", "published": "Apr-21", "read": "9 min read", "published_on": "In The Startup"}, {"title": "How to utilise X509 Client Certificates & RBAC to secure Kubernetes", "subtitle": "How We Effectively Managed Access to Our Kubernetes Cluster", "image_id": "0*zwy6fTDsKd3syo-A", "link": "https://medium.com/swlh/how-we-effectively-managed-access-to-our-kubernetes-cluster-38821cf24d57?source=friends_link&sk=2aef2012888303820ca8f4c7ca012022", "published": "Apr-20", "read": "10 min read", "published_on": "In The Startup"}, {"title": "How to Create a Highly Available NGINX Load Balancer Google Cloud Platform", "subtitle": "Highly Available NGINX Load Balancer Google Cloud using Pacemaker, Corosync and Static IPs CentOS 7", "image_id": "0*YAyaoqQvRKDVEzLq", "link": "https://levelup.gitconnected.com/how-to-create-a-highly-available-nginx-load-balancer-on-google-cloud-platform-9ebc8b6abb09?source=friends_link&sk=6834d9206af17d039b16005a2a16dbf8", "published": "Apr-17", "read": "10 min read", "published_on": "In Level Up Coding"}, {"title": "How to Secure Kubernetes the Hard Way", "subtitle": "An adaptatiof Kelsy Hightower\u2019s \u201cKubernetes the Hard Way\u201d using Terraform to create a hardened cluster CentOS running Docker", "image_id": "1*yP7eqmpv4z-v6codS3skSg.jpeg", "link": "https://medium.com/better-programming/how-to-secure-kubernetes-the-hard-way-9b421b36aba4?source=friends_link&sk=a291da810bf315aa190b9fe808bd7204", "published": "Apr-15", "read": "15 min read", "published_on": "In Better Programming"}, {"title": "How to Harden Your Kubernetes Cluster for Production", "subtitle": "Best practices for securing your Kubernetes cluster in production", "image_id": "1*4yQAccLVjlRfGLWkLLzaKQ.jpeg", "link": "https://medium.com/better-programming/how-to-harden-your-kubernetes-cluster-for-production-7e47990efc2a?source=friends_link&sk=35a2a2d728199165b27cb7e05551e287", "published": "Apr-09", "read": "9 min read", "published_on": "In Better Programming"}, {"title": "How to Terraform With Jenkins and Slack Google\u2019s Cloud Platform", "subtitle": "An illustrated guide to Hashicorp\u2019s Terraform", "image_id": "1*XnJVIsOVMAnxmGrQT0D4rg.jpeg", "link": "https://medium.com/better-programming/how-to-terraform-with-jenkins-and-slack-on-googles-cloud-platform-56c5e8b3aeeb?source=friends_link&sk=bcaf32a62085e1ff98d44e87eb9d9c85", "published": "Apr-06", "read": "10 min read", "published_on": "In Better Programming"}, {"title": "How We Scaled Jenkins in Less Than a Day", "subtitle": "Scale your Jenkins agents using Kubernetes", "image_id": "1*Kj--YsDPwmsiosS5c53FnA.jpeg", "link": "https://medium.com/better-programming/how-we-scaled-jenkins-in-less-than-a-day-ccbcada8e4a4?source=friends_link&sk=90a2583b6bf873300986b681512652b4", "published": "Apr-02", "read": "8 min read", "published_on": "In Better Programming"}, {"title": "Dont Do Agile,  Be Agile", "subtitle": "Why Scrum is not the silver bullet", "image_id": "0*lD_JlAs121Xnd2Wp", "link": "https://medium.com/better-programming/dont-do-agile-be-agile-5c8832c43181?source=friends_link&sk=7c469587388ecf4b5c88c70d63042f12", "published": "Mar-31", "read": "6 min read", "published_on": "In Better Programming"}, {"title": "How to Helm With Sonatype Nexus", "subtitle": "Using Sonatype Nexus as a Helm repository for CI/CD", "image_id": "0*MT4rtKHy7D6FbHvu", "link": "https://medium.com/better-programming/how-to-helm-with-sonatype-nexus-c49c98324a19?source=friends_link&sk=f0512e18a9258e8dd68d90e269036293", "published": "Mar-28", "read": "7 min read", "published_on": "In Better Programming"}, {"title": "Kubernetes For Beginners", "subtitle": "Kubernetes, for a more general audience", "image_id": "0*ICfb_U811Cv88Jlo", "link": "https://medium.com/better-programming/kubernetes-for-beginners-b3042e01ccff?source=friends_link&sk=196e97d92afc3e7623499783b50bfbc0", "published": "Mar-24", "read": "8 min read", "published_on": "In Better Programming"}, {"title": "Demystifying Kubernetes Objects", "subtitle": "Understanding the what, the why, and the how", "image_id": "1*3mo8eobgeQgTM-HtzoOOtg.jpeg", "link": "https://medium.com/better-programming/demystifying-kubernetes-objects-understanding-the-what-why-and-how-18b42c9ca9c2?source=friends_link&sk=137ff6f613c571132e76da88925ecd5b", "published": "Mar-23", "read": "15 min read", "published_on": "In Better Programming"}, {"title": "Using the Azure Kubernetes Provider in a VM Based K8S Cluster", "subtitle": "How to Hook in the Azure Cloud Provider for Persistent Volume Claims and Load Balancers with your K8S cluster", "image_id": "0*PLs3CdVkwmFuK_Aa", "link": "https://medium.com/swlh/using-the-azure-kubernetes-provider-in-a-vm-based-k8s-cluster-fdf941b86d69?source=friends_link&sk=4b5a6616991688e1ce211f1b7ac3ac0e", "published": "Mar-22", "read": "4 min read", "published_on": "In The Startup"}]');
  //var myObj = JSON.parse('[{"title": "4 Reasons to Use Kubernetes in the Serverless Era", "subtitle": "Is serverless a replacement for Kubernetes?", "link": "https://medium.com/better-programming/4-reasons-to-use-kubernetes-in-the-serverless-era-cf77ea3b018b?source=friends_link&sk=55f13f50a43bd3b756a54535721adca2", "image_id": "0*T-jwYbtS44Rm9ccG"},  {"title": "Tips for Rightsizing Your Kubernetes Cluster", "subtitle": "A few large nodes or many small nodes?", "link": "https://medium.com/better-programming/tips-for-rightsizing-your-kubernetes-cluster-e0a8f1093d8d?source=friends_link&sk=63d98a3e914298448e4f684f54efa51b", "image_id": "1*9jZLjslLwbMW18RWPd-9uQ.jpeg"},  {"title": "Designing Highly Available Container Applications on Kubernetes", "subtitle": "With pod disruption budgets and anti-affinity", "link": "https://medium.com/better-programming/designing-highly-available-container-applications-on-kubernetes-50455716b76f?source=friends_link&sk=965d54623f26d256a0fdae5724befaa2", "image_id": "0*BAhglWQXDtTQ2o9L"},{"title": "My Experience With the CNCF Certified Kubernetes Administrator Exam", "subtitle": "Tips for cracking the Certified Kubernetes Administrator Exam", "link": "https://medium.com/the-innovation/my-experience-with-the-cncf-certified-kubernetes-administrator-exam-12247d87baf2?source=friends_link&sk=a93428b351503093070df640fcafb921", "image_id": "1*ILKk25-VR3-4E3wT5RBnqQ.png"}]');
  txt = ""
      for (x in myObj) {
        txt += "<div class=\"item mb-5\">  <div class=\"media\">    <img class=\"mr-3 img-fluid post-thumb d-none d-md-flex\" src=\"https://miro.medium.com/fit/c/552/420/"+myObj[x].image_id+"\" alt=\"image\">    <div class=\"media-body\">      <h3 class=\"title mb-1\"><a href=\""+myObj[x].link+"\" target=\"_blank\">"+myObj[x].title+"</a></h3> <div class=\"meta mb-1\"><span class=\"date\">Published "+myObj[x].published+"</span><span class=\"time\">"+myObj[x].read+"</span></div>           <div class=\"intro\">"+myObj[x].subtitle+"</div>      <a class=\"more-link\" href=\""+myObj[x].link+"\" target=\"_blank\">Read more &rarr;</a>    </div><!--//media-body-->  </div><!--//media--></div><!--//item-->\""
      }
  //txt += "<nav class=\"blog-nav nav nav-justified my-5\">   <a class=\"nav-link-prev nav-item nav-link d-none rounded-left\" href=\"#\">Previous<i class=\"arrow-prev fas fa-long-arrow-alt-left\"></i></a>   <a class=\"nav-link-next nav-item nav-link rounded\" href=\"blog-list.html\">Next<i class=\"arrow-next fas fa-long-arrow-alt-right\"></i></a>  </nav>"
  document.getElementById("blog_container").innerHTML = txt;
}
