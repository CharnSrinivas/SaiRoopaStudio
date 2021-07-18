import multiprocessing

# bind = "0.0.0.0:5000"
workers = multiprocessing.cpu_count() * 2 + 1
timeout = 60 * 3 #time out of each workder in seconds