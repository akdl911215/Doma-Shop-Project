//package univer.ch09;
//
//import java.io.IOException;
//import java.nio.channels.AsynchronousFileChannel;
//import java.nio.channels.CompletionHandler;
//import java.nio.file.Files;
//import java.nio.file.Path;
//import java.nio.file.Paths;
//import java.nio.file.StandardOpenOption;
//import java.util.EnumSet;
//import java.util.concurrent.ExecutorService;
//import java.util.concurrent.Executors;
//
//class Data {
//    Path path;
//    AsynchronousFileChannel file;
//}
//
//public class AsynchronousFileChannelWriteTest {
//    public static void main(String[] args) throws Exception {
//
//        int procs = Runtime.getRuntime().availableProcessors();
//        ExecutorService exec = Executors.newFixedThreadPool(procs);
//
//        for (int i = 0; i < 10; ++i) {
//            Path path = Paths.get("c:\\java\\temp\\file" + i + ".txt");
//            Files.createDirectories(path.getParent());
//
//            EnumSet<StandardOpenOption> ops;
//            ops = EnumSet.of(StandardOpenOption.CREATE,
//                            StandardOpenOption.WRITE);
//
//            AsynchronousFileChannel file;
//            file = AsynchronousFileChannel.open(path, ops, exec);
//
//            CompletionHandler<Integer, Data> handler = new CompletionHandler<Integer, Data>() {
//                @Override
//                public void completed(Integer result, Data data) {
//                    System.out.print(data.path.getFileName() + " : " + result);
//                    System.out.println(" bytes written : " + Thread.currentThread().getName());
//
//                    try {
//                        data.file.close();
//                    } catch (Exception e) {
//
//                    }
//
//                    public void failed(Throwable exec, Data data) {
//
//                    }
//                }
//
//                @Override
//                public void failed(Throwable exc, Data attachment) {
//
//                }
//            }
//        }
//
//    }
//}
