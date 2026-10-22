import http.server
import socketserver
import socket

PORT = 8000

# Custom HTTP Handler to suppress default request logging
class QuietHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        # Suppress logging to keep the console clean
        pass

    def end_headers(self):
        # Disable cache so changes in news.json/JS reflect immediately
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

def get_local_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return "127.0.0.1"

def run_server():
    local_ip = get_local_ip()
    
    print("=" * 50)
    print("🚀 Local Development Server is Running!")
    print("=" * 50)
    print(f"🔗 Localhost Link : http://localhost:{PORT}")
    print(f"🔗 Local IP Link  : http://{local_ip}:{PORT}")
    print("=" * 50)
    print("Press Ctrl + C to stop the server.\n")

    with socketserver.TCPServer(("", PORT), QuietHTTPRequestHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n🛑 Server stopped successfully.")

if __name__ == "__main__":
    run_server()
