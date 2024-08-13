<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Terms of Use</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
        }
        h1 {
            color: #333;
        }
        .accordion {
            background-color: #f1f1f1;
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 15px;
            margin: 5px 0;
            cursor: pointer;
            position: relative;
            transition: background-color 0.3s ease;
        }
        .accordion:hover {
            background-color: #e2e2e2;
        }
        .accordion .status {
            width: 15px;
            height: 15px;
            border-radius: 50%;
            border: 1px solid #333;
            position: absolute;
            top: 50%;
            right: 20px;
            transform: translateY(-50%);
            background-color: transparent;
            transition: background-color 0.3s ease;
        }
        .panel {
            background-color: #f9f9f9;
            border: 1px solid #ccc;
            border-top: none;
            border-radius: 0 0 5px 5px;
            padding: 15px;
            margin: 0;
            display: none;
            overflow: hidden;
            transition: max-height 0.3s ease, padding 0.3s ease;
            max-height: 0;
        }
        .panel.show {
            display: block;
            max-height: 500px; /* Adjust based on content length */
        }
    </style>
</head>
<body>

<h1>Terms of Use</h1>

<div class="accordion" data-section="introduction">
    Introduction
    <div class="status"></div>
</div>
<div class="panel">
    <p>By using this source code, you agree to comply with and be bound by the following terms and conditions. Please read these terms of use carefully before using the code.</p>
</div>

<div class="accordion" data-section="license">
    License
    <div class="status"></div>
</div>
<div class="panel">
    <p>This code is provided under <b>Lodwick Masete Codes</b>. You are permitted to use, modify, and distribute the code in accordance with the terms of this license.</p>
</div>

<div class="accordion" data-section="use">
    Use of the Code
    <div class="status"></div>
</div>
<div class="panel">
    <h3>Non-Premium Use</h3>
    <p>This version of the code is provided as a non-premium version with limited features. It is intended for personal or educational use.</p>
    
    <h3>Premium Access</h3>
    <p>For access to the premium version with additional features, please contact me at <a href="mailto:lodwickjmasete@gmail.com">lodwickjmasete@gmail.com</a>.</p>
</div>

<div class="accordion" data-section="restrictions">
    Restrictions
    <div class="status"></div>
</div>
<div class="panel">
    <h3>No Warranty</h3>
    <p>The code is provided "as is," without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, and noninfringement.</p>
    
    <h3>No Liability</h3>
    <p>In no event shall the author be liable for any claim, damages, or other liability, whether in an action of contract, tort, or otherwise, arising from, out of, or in connection with the code or the use or other dealings in the code.</p>
</div>

<div class="accordion" data-section="responsibilities">
    User Responsibilities
    <div class="status"></div>
</div>
<div class="panel">
    <p>Users must comply with all applicable laws and regulations while using the code. Proper attribution must be given to the original author in any distributed or derivative work.</p>
</div>

<div class="accordion" data-section="contact">
    Contact Information
    <div class="status"></div>
</div>
<div class="panel">
    <p>For any questions regarding these terms or to inquire about premium access, please contact me at <a href="mailto:lodwickjmasete@gmail.com">lodwickjmasete@gmail.com</a>.</p>
    <p>More projects at <a href="https://lodwickmasete.github.io" target="_blank">lodwickmasete.github.io</a></p>
</div>

<div class="accordion" data-section="changes">
    Changes to Terms
    <div class="status"></div>
</div>
<div class="panel">
    <p>I reserve the right to modify these terms at any time. Changes will be updated on this repository, and continued use of the code signifies acceptance of any modifications.</p>
</div>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        var acc = document.getElementsByClassName("accordion");

        // Load read status from local storage
        for (var i = 0; i < acc.length; i++) {
            var section = acc[i].getAttribute('data-section');
            var isRead = localStorage.getItem(section);

            if (isRead) {
                acc[i].querySelector('.status').style.backgroundColor = "black";
                var panel = acc[i].nextElementSibling;
                panel.style.display = "block";
                panel.style.maxHeight = panel.scrollHeight + "px";
                panel.classList.add("show");
            }

            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                var status = this.querySelector('.status');
                var section = this.getAttribute('data-section');

                if (panel.classList.contains("show")) {
                    panel.style.maxHeight = 0;
                    setTimeout(() => {
                        panel.style.display = "none";
                        panel.classList.remove("show");
                    }, 300);
                } else {
                    panel.style.display = "block";
                    setTimeout(() => {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                        panel.classList.add("show");
                    }, 10);
                    localStorage.setItem(section, "read");
                }

                if (status.style.backgroundColor === "black") {
                    status.style.backgroundColor = "transparent";
                    localStorage.removeItem(section);
                } else {
                    status.style.backgroundColor = "black";
                }
            });
        }
    });
</script>

</body>
</html>
lodwickjmasete@gmail.com 
masetelodwick@gmail.com 
