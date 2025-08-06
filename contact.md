---
title: Contact
layout: base.njk
---

<main class="container my-5 py-5">
    <div class="text-center mb-5 fade-in-up">
        <h1 class="display-4 fw-bold">Get In Touch</h1>
        <p class="text-white-50">Have a project in mind? We'd love to hear about it.</p>
    </div>

    <div class="row g-5 fade-in-up">
        <div class="col-lg-8">
            <div class="glass-card p-4 p-md-5 glass-form">
                <form
                  action="https://formspree.io/f/mblkzweg"
                  method="POST"
                >
                    <div class="mb-4">
                        <label for="name" class="form-label">Full Name</label>
                        <input type="text" name="name" class="form-control" id="name" placeholder="John Doe">
                    </div>
                    <div class="mb-4">
                        <label for="email" class="form-label">Email Address</label>
                        <input type="email" name="email" class="form-control" id="email" placeholder="name@example.com">
                    </div>
                    <div class="mb-4">
                        <label for="message" class="form-label">Message</label>
                        <textarea class="form-control" name="message" id="message" rows="5" placeholder="Tell us about your project..."></textarea>
                    </div>
                    <button type="submit" class="btn btn-glass-submit w-100">Send Message</button>
                </form>
            </div>
        </div>
        <div class="col-lg-4">
             <div class="glass-card p-4 h-100">
                 <h4 class="fw-semibold mb-4">Contact Information</h4>
                 <ul class="list-unstyled">
                    <li class="mb-3 d-flex"><i class="bi bi-geo-alt-fill me-3 fs-5"></i><div><strong>Location:</strong><br>Hyderabad, Telangana, India</div></li>
                    <li class="mb-3 d-flex"><i class="bi bi-envelope-fill me-3 fs-5"></i><div><strong>Email:</strong><br>contact@visionary.design</div></li>
                    <li class="d-flex"><i class="bi bi-telephone-fill me-3 fs-5"></i><div><strong>Phone:</strong><br>+91 12345 67890</div></li>
                 </ul>
             </div>
        </div>
    </div>
</main>