package com.cognizant;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

import org.junit.Test;

public class MyServiceTest {

    @Test
    public void testExternalApi() {

        // Step 1: Create Mock Object
        ExternalApi mockApi = mock(ExternalApi.class);

        // Step 2: Stub Method
        when(mockApi.getData()).thenReturn("Mock Data");

        // Step 3: Use Mock Object
        MyService service = new MyService(mockApi);

        String result = service.fetchData();

        assertEquals("Mock Data", result);
    }
}